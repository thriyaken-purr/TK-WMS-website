import library from './wms-library.js';
const search=document.getElementById('wmsSearch');
const status=document.getElementById('wmsResults');
const clean=text=>text.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
const topics=library.map(entry=>({element:document.getElementById(entry.id),text:clean([entry.title,...entry.aliases,entry.summary,entry.detail,entry.example].join(' '))}));
search.addEventListener('input',()=>{
  const terms=clean(search.value).split(' ').filter(Boolean);
  let shown=0;
  for(const topic of topics){topic.element.hidden=!terms.every(term=>topic.text.includes(term));if(!topic.element.hidden)shown++;}
  status.textContent=`${shown} of ${topics.length} topics`;
  document.getElementById('wmsEmpty').hidden=shown>0;
});
function openLinkedTopic(){
  const id=decodeURIComponent(location.hash.slice(1));
  const topic=topics.find(t=>t.element.id===id);
  if(topic){search.value='';search.dispatchEvent(new Event('input'));topic.element.open=true;topic.element.scrollIntoView({block:'start'});}
}
window.addEventListener('hashchange',openLinkedTopic);
openLinkedTopic();
