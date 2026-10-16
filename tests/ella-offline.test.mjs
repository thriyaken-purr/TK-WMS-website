import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync,existsSync } from 'node:fs';
import { answerElla,wmsLibrary } from '../public/ella-offline.js';

test('Every reference topic can be asked as a plain-language definition',()=>{
  for(const entry of wmsLibrary){
    const question='What is '+entry.aliases[0]+'?';
    const result=answerElla(question);
    assert.notEqual(result?.kind,'fallback',question);
  }
});
test('Broad terminology and workflow questions get educational answers',()=>{
  for(const question of ['Compare FIFO and FEFO','What is zone picking?','How does batch picking work?','What is ABC analysis?','What is a short pick?','Why is available stock different from on hand?','What does WCS mean?','What is slotting?','What is SSCC?','What is UAT?','What is 3PL?']){
    const result=answerElla(question);
    assert.equal(result.kind,'reference',question);
    assert.match(result.answer,/general/);
  }
});
test('Typo matching handles a common transposition without accepting nonsense',()=>{
  assert.equal(answerElla('Explain recieving').kind,'reference');
  assert.equal(answerElla('Explain replenishment cryptocurrency').kind,'fallback');
  assert.equal(answerElla('What is blorptastic?').kind,'fallback');
});
test('Reference replies retain follow-up context and examples',()=>{
  const reply=answerElla('What is FIFO?');
  const more=answerElla('Tell me more',reply.contextUrl);
  assert.equal(more.kind,'reference');
  assert.equal(more.sections[0].title,'FIFO');
  const example=answerElla('Give me an example',reply.contextUrl);
  assert.equal(example.sections[0].paragraphs.length,1);
  assert.equal(example.sections[0].paragraphs[0].heading,'Example');
  assert.equal(answerElla('Give me an example','/operations/kitting.html').sections[0].title,'Kitting & bills of material');
});
test('General concepts are never promoted to verified TK WMS capabilities',()=>{
  for(const q of ['Does TK WMS support FIFO?','Does TK WMS support FEFO?','Does TK WMS have robotics?','Can I configure zone picking in TK WMS?'])assert.equal(answerElla(q).kind,'fallback',q);
});
test('Unknown features, unrelated requests, and live records remain bounded',()=>{
  for(const q of ['What is the weather?','Explain inventory blockchain','Look up ASN 12345','What is my stock today?','Does voice recording automatically transcribe speech?'])assert.equal(answerElla(q).kind,'fallback',q);
});
test('All reference sources point to a real topic and all related guides exist',()=>{
  const html=readFileSync('resources/wms-guide.html','utf8');
  for(const entry of wmsLibrary){
    assert.ok(html.includes('id="'+entry.id+'"'),entry.id);
    if(entry.tkUrl)assert.ok(existsSync('.'+entry.tkUrl),entry.tkUrl);
  }
  const reply=answerElla('Compare FIFO and FEFO');
  assert.equal(reply.sources.length,2);
  for(const source of reply.sources)assert.ok(html.includes('id="'+source.url.split('#')[1]+'"'));
});

test('Common broad questions cover approaches and end-to-end workflow',()=>{
  const picking=answerElla('What are the types of picking?');
  assert.equal(picking.kind,'reference');
  assert.equal(picking.sections.length,4);
  assert.match(picking.answer,/not a list of confirmed TK WMS/);
  const flow=answerElla('Walk me through the process from receiving to shipping');
  assert.equal(flow.kind,'reference');
  assert.equal(flow.sections[0].paragraphs.length,3);
});
