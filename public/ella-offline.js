import library from './wms-library.js';
import { answerElla as answerSavedGuide } from './ella-guide.js';
const normalize = value => String(value).toLowerCase().normalize('NFKC').replace(/tk[ -]?wms/g,'tk wms').replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
const stem = word => word.length>4 ? word.replace(/(ing|ed|s)$/,'') : word;
const words = value => normalize(value).split(' ').filter(Boolean).map(stem);
const stop = new Set(words('a an and are as at be been being by can could do does did for from have has how i if in into is it its like me my of on or our please really tell that the their them then there these they this those to us was we were what whats when where which why will with would you your about explain explanation describe description define definition meaning mean means stand stands understand know want need system software warehouse wms tk help works work working use used using do difference differences differ different comparing compare versus vs between both more detail details detailed give gives example examples show list include includes includes support supports supported allow allows handle handles general basic basically purpose thing things information info actually exactly process processes function functions mechanism mechanisms relate related together say answer question questions some any also much much kind types concept concepts lets let walk through let provide provides please surely'));
const prepared=library.map(entry=>({...entry, terms:entry.aliases.map(normalize), vocabulary:new Set(words([entry.title,entry.summary,entry.detail,entry.example,...entry.aliases].join(' ')))}));
function closeSpelling(a,b) {
  if (Math.abs(a.length-b.length)>1 || Math.min(a.length,b.length)<5) return false;
  if (a.length===b.length) {
    const differences=[];
    for(let i=0;i<a.length;i++) if(a[i]!==b[i]) differences.push(i);
    return differences.length<=1 || (differences.length===2 && differences[1]===differences[0]+1 && a[differences[0]]===b[differences[1]] && a[differences[1]]===b[differences[0]]);
  }
  const [short,long]=a.length<b.length?[a,b]:[b,a];
  for(let i=0;i<long.length;i++) if(long.slice(0,i)+long.slice(i+1)===short)return true;
  return false;
}
function findTopics(text) {
  const padded=' '+text+' ';
  const query=text.split(' ');
  let matches=prepared.flatMap(entry=>{
    if(entry.id==='wms' && !/^(what is|explain|describe|tell me about|define)? ?(a |the )?(tk )?wms(?: system)?$/.test(text)) return [];
    const phrases=entry.terms.filter(term=>padded.includes(' '+term+' '));
    if(phrases.length) {const phrase=phrases.sort((a,b)=>b.length-a.length)[0];return [{entry,phrase,score:phrase.split(' ').length*10+phrase.length}];}
    const typo=entry.terms.find(term=>!term.includes(' ')&&term.length>=5&&query.some(word=>closeSpelling(stem(word),stem(term))));
    return typo?[{entry,phrase:typo,score:typo.length/2,typo:true}]:[];
  });
  matches=matches.filter(match=>!matches.some(other=>other!==match&&other.phrase!==match.phrase&&(' '+other.phrase+' ').includes(' '+match.phrase+' ')));
  return matches.sort((a,b)=>b.score-a.score);
}
const linkFor=entry=>'/resources/wms-guide.html#'+entry.id;
function entrySection(entry,exampleOnly=false) {
  return {title:entry.title,paragraphs:exampleOnly?[{heading:'Example',text:entry.example}]:[
    {heading:'What it means',text:entry.summary},
    {heading:'How it fits',text:entry.detail},
    {heading:'Example',text:entry.example}
  ]};
}
export function answerElla(question,previousUrl=null) {
  const raw=String(question??'').trim().slice(0,500);
  const text=normalize(raw);
  if(!text)return null;
  const saved=answerSavedGuide(raw,previousUrl);
  if(saved?.kind==='greeting')return saved;
  if(/\b(password|credentials?|today|right now|currently)\b|\b(my|our) (stock|inventory|orders?|shipments?|po|asn)\b|\b(?:order|shipment|sku|po|asn)\s*\d/.test(text)||/can’t (check|look up) live/.test(saved?.answer||''))return {kind:'fallback',answer:'I can explain warehouse concepts and the documented TK WMS features, but I can’t check live stock, orders, documents, or account information.',url:'/operations.html',label:'TK WMS operations'};
  // Retain precise short replies and retrieved TK WMS explanations already supported.
  if(saved&&saved.kind!=='fallback')return saved;
  if (/\b(types|methods|ways)\b/.test(text) && /\bpick(?:ing)?\b/.test(text) && !/\btk wms\b/.test(text)) {
    const entries=prepared.filter(entry=>['picking','batch-picking','zone-picking','cluster-picking'].includes(entry.id));
    return {kind:'reference',answer:'Common picking approaches differ in how orders and warehouse areas are grouped. These are general WMS concepts, not a list of confirmed TK WMS picking modes.',sections:entries.map(entry=>({title:entry.title,paragraphs:[{heading:'Approach',text:entry.summary}]})),sources:entries.map(entry=>({url:linkFor(entry),label:entry.title})),contextUrl:linkFor(entries[0]),suggestions:['Compare batch picking and cluster picking','What is zone picking?']};
  }
  if (/\b(receiving|inbound)\b.*\b(shipping|outbound)\b/.test(text) && /\b(flow|workflow|process|through|start|end|steps)\b/.test(text) && !/\b(my|our|configure|automatically|error|delete|update)\b/.test(text)) {
    return {kind:'reference',answer:'A general receipt-to-shipment workflow follows these stages. The actual steps and confirmations depend on the warehouse configuration.',sections:[{title:'From arrival to dispatch',paragraphs:[
      {heading:'1. Prepare and receive',text:'Review expected delivery information, identify incoming goods, record actual quantities, and review discrepancies or inspection requirements.'},
      {heading:'2. Put away and control stock',text:'Move goods into the appropriate storage locations, track inventory status, and replenish picking locations as needed.'},
      {heading:'3. Plan and fulfill orders',text:'Review demand and allocation, carry out picking, verify and pack goods, then complete the configured shipment checks and carrier shipping work.'}
    ]}],sources:[{url:'/operations/inbound.html',label:'Receiving & putaway'},{url:'/operations/outbound.html',label:'Picking, packing & shipping'}],contextUrl:'/operations/inbound.html'};
  }
  const contextId=previousUrl?.startsWith('/resources/wms-guide.html#')?previousUrl.split('#')[1]:null;
  const contextual=prepared.find(entry=>entry.id===contextId)||prepared.find(entry=>entry.tkUrl===previousUrl);
  const followUp=/^(tell me more|more details?|explain (it|that)|how does (it|that) work|give (me )?an? example|example|why does (it|that) matter|what about (it|that))$/.test(text);
  const found=followUp&&contextual?[{entry:contextual,phrase:contextual.title,score:99}]:findTopics(text);
  if(!found.length)return saved;
  const comparison=/\b(compare|comparison|versus|vs|difference|differ|different)\b/.test(text);
  const selected=(comparison?found.slice(0,3):found.slice(0,1));
  const first=selected[0].entry;
  const sources=selected.map(({entry})=>({url:linkFor(entry),label:entry.title}));
  const tkQuestion=/\btk wms\b/.test(text)||/\b(support|supports|can i|does it|does the system|is it possible)\b/.test(text);
  const exactSetup=/\b(pricing|price|cost|fees|compliance|certified|certification|guarantee|automatically|transcription|transcribe|configure|set up|setup values|delete|reset|sql|script|source code|create|update|connect to|integrate with|step by step|error code)\b/.test(text);
  if(exactSetup || (tkQuestion&&!first.tkUrl))return {kind:'fallback',answer:'Sorry, I can explain '+first.title.toLowerCase()+', but I don’t have verified details for that specific TK WMS capability or setup. The reference below explains the general concept.',url:saved?.url||first.tkUrl||linkFor(first),label:saved?.label||first.title,sections:[{title:first.title,paragraphs:[{heading:'General WMS concept',text:first.summary}]}],sources,contextUrl:linkFor(first)};
  const known=new Set(selected.flatMap(({entry})=>[...entry.vocabulary]));
  const unknown=words(raw).filter(word=>!stop.has(word)&&!known.has(word)&&!selected.some(({entry})=>entry.terms.some(term=>closeSpelling(word,stem(term)))));
  if(!followUp&&unknown.length)return saved;
  return {kind:'reference',answer:comparison?'Here’s a general warehouse explanation of each concept:':'Here’s a general WMS explanation:',sections:selected.map(({entry})=>entrySection(entry,followUp&&/example/.test(text))),sources,contextUrl:linkFor(first),suggestions:comparison?['Give me an example','Tell me more']:['Give me an example','Tell me more']};
}
export { library as wmsLibrary };
