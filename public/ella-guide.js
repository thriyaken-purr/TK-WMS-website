import knowledge from './ella-knowledge.js';
import { explainTerminology } from './ella-terminology.js';
import { answerBasicElla } from './ella-answers.js';
const normalize = text => text.toLowerCase().normalize('NFKC').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g,' ').trim();
const stem = word => word.replace(/(ing|ed|s)$/,'');
const tokens = text => normalize(text).split(' ').filter(Boolean).map(stem);
const filler = new Set(tokens('a an the i me my we our it its that this those these what which how why who is are was were be can could does do will would should may to for of in on by at from as with and or about into tk wms warehouse system software please explain describe compare comparing differ difference differences between versus vs more detail detailed details understand tell walk through work works working feature features purpose basic help example examples relate relates related together they them their also than then know want need guide used use support supports have has include includes provide provides first next where when exact exactly'));
const aliases = [
  ['/operations/inbound.html', /\b(inbound|receiv\w*|receipts?|putaway|put away|appointments?|yard|inspections?|returns?)\b/],
  ['/operations/inventory.html', /\b(inventory|stock|lpns?|serial\w*|recalls?|holds?|adjust\w*)\b/],
  ['/operations/outbound.html', /\b(outbound|orders?|waves?|allocation|picking|packing|shipping|shipments?|cartonization|carriers?)\b/],
  ['/operations/replenishment.html', /\b(replenish\w*|tasks?|priorit\w*|assign\w*)\b/],
  ['/operations/counts.html', /\b(cycle count\w*|count plans?|count tasks?|variance\w*|discrepanc\w*)\b/],
  ['/operations/kitting.html', /\b(kitting|kits?|assembly|disassembly|bom|bill of material\w*|production|stations?)\b/],
  ['/operations/crossdock.html', /\b(cross dock\w*|crossdock\w*)\b/],
  ['/operations/setup.html', /\b(master data|item\w*|sku\w*|locations?|aisles?|zones?|layouts?|suppliers?|customers?|pick routes?)\b/],
  ['/platform/strategy.html', /\b(strateg\w*|suggested location\w*|location rules?|reserv\w*)\b/],
  ['/platform/rules.html', /\b(business rules?|rule actions?|polic\w*)\b/],
  ['/platform/workflow.html', /\b(workflow\w*|screen\w*|rf|handheld\w*)\b/],
  ['/platform/visibility.html', /\b(dashboards?|quer\w*|visibility|performance|history|inquir\w*)\b/],
  ['/platform/implementation.html', /\b(reports?|labels?|interfaces?|integrat\w*|sync\w*|imports?|exports?|apis?|administrat\w*|users?|roles?|access|permissions?|training)\b/],
  ['/platform/voice.html', /\b(voice|recording|speech)\b/],
  ['/platform/ai-development.html', /\b(ai|artificial intelligence|development|built)\b/]
];
export function answerElla(question, previousUrl = null) {
  const raw = String(question ?? '').trim().slice(0,500);
  const terminology = explainTerminology(raw);
  if (terminology) return terminology;
  const basic = answerBasicElla(raw);
  if (!basic) return null;
  const text = normalize(raw);
  if (basic.kind === 'greeting' || /can’t check live/.test(basic.answer)) return basic;
  const followUp = /^(tell me more|more details?|explain (it|that)|how does (it|that) work|what about (it|that))[ ?.!]*$/i.test(raw);
  const wantsDetail = followUp || /\b(explain|describe|compare|differ|difference|different|versus|vs|detail\w*|how|relat\w*)\b/.test(text);
  if (!wantsDetail) return basic;
  // The public guides do not supply customer setup values, troubleshooting steps,
  // vendor integrations, live records, or executable warehouse instructions.
  if (/\b(price\w*|cost\w*|fee\w*|certif\w*|compliance|error\w*|fail\w*|troubleshoot\w*|debug\w*|sql|code|scripts?|delete|reset|password|credentials?|automatically|transcri\w*|integrate with|connect to|step by step)\b/.test(text) || /\bhow (do|can|should|would) (i|we) (set|configure|implement|build|install|enable|disable|fix|change|create|update)\b/.test(text)) return basic;
  let urls = aliases.filter(([,pattern]) => pattern.test(text)).map(([url])=>url);
  const comparison = /\b(compare|differ|difference|different|versus|vs)\b/.test(text);
  if (followUp && previousUrl && knowledge.some(page=>page.url===previousUrl)) urls = [previousUrl];
  // Prefer the basic match for single-topic explanations; cross-topic comparisons
  // retain explicitly named topics, rather than inventing a synthesized answer.
  if (!comparison && basic.url && knowledge.some(page=>page.url===basic.url)) urls = [basic.url];
  const pages = knowledge.filter(page=>urls.includes(page.url));
  if (!pages.length || pages.length>3) return basic;
  const words = tokens(raw).filter(word=>!filler.has(word));
  const known = new Set(tokens(pages.map(page=>page.title+' '+page.sections.map(s=>s.heading+' '+s.text).join(' ')).join(' ')));
  if (!followUp && words.some(word=>!known.has(word))) return basic;
  const score = section => {
    const heading=new Set(tokens(section.heading)), body=new Set(tokens(section.text));
    return words.reduce((sum,word)=>sum+(heading.has(word)?3:body.has(word)?1:0),0);
  };
  const sections = pages.map(page => {
    const ranked=page.sections.map((section,index)=>({...section,index,score:score(section)})).sort((a,b)=>b.score-a.score);
    const chosen=ranked.slice(0,comparison?1:2).sort((a,b)=>a.index-b.index);
    return {title:page.title, paragraphs:chosen.map(s=>({heading:s.heading,text:s.text})),url:page.url};
  });
  return {kind:'detail',answer:comparison?'Here’s how the TK WMS guides describe those areas:':'Here’s a closer look from the TK WMS guide:',sections,sources:pages.map(page=>({url:page.url,label:page.title})),contextUrl:pages[0].url};
}
