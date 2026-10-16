import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
const decode = text => text.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, ' ').trim();
const pages = ['operations', 'platform'].flatMap(dir => readdirSync(dir).filter(name => name.endsWith('.html') && !['ella.html', 'ai.html'].includes(name)).map(name => ({dir, name})));
const knowledge = pages.map(({dir, name}) => {
  const html = readFileSync(`${dir}/${name}`, 'utf8');
  const sections = [...html.matchAll(/<section class="story-section"><h2>(.*?)<\/h2><p>(.*?)<\/p><\/section>/gs)].map(([,heading,text]) => ({heading:decode(heading),text:decode(text)}));
  return {url:`/${dir}/${name}`, title:decode(html.match(/<title>(.*?) \| TK WMS<\/title>/s)?.[1] || name), sections};
}).filter(page => page.sections.length);
writeFileSync('public/ella-knowledge.js', '// Generated from the public TK WMS guides by scripts/generate-ella-knowledge.mjs.\nexport default ' + JSON.stringify(knowledge, null, 2) + ';\n');
console.log(`Prepared Ella knowledge from ${knowledge.length} product guides.`);
