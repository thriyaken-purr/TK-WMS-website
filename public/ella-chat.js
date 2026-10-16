import { answerElla } from './ella-guide.js';
const form = document.getElementById('ellaComposer');
const input = document.getElementById('ellaQuestion');
const thread = document.getElementById('ellaThread');
let previousUrl = null;
function send(question) {
  const text = question.trim().slice(0, 500);
  const response = answerElla(text, previousUrl);
  if (!response) return;
  const exchange = document.createElement('div');
  exchange.className = 'ella-exchange';
  const user = document.createElement('p');
  user.className = 'ella-bubble user';
  user.textContent = text;
  const reply = document.createElement('p');
  reply.className = 'ella-bubble';
  reply.textContent = response.answer;
  for (const section of response.sections || []) {
    const title = document.createElement('strong');
    title.className = 'ella-detail-title';
    title.textContent = section.title;
    reply.append(title);
    for (const paragraph of section.paragraphs) {
      const heading = document.createElement('span');
      heading.className = 'ella-detail-heading';
      heading.textContent = paragraph.heading;
      const text = document.createElement('span');
      text.className = 'ella-detail-text';
      text.textContent = paragraph.text;
      reply.append(heading, text);
    }
  }
  const sources = response.sources || (response.url ? [{url:response.url,label:response.label}] : []);
  for (const source of sources) {
    const link = document.createElement('a');
    link.className = 'ella-answer-link';
    link.href = source.url;
    link.textContent = `Read: ${source.label} ↗`;
    reply.append(link);
  }
  if (response.kind !== 'fallback') previousUrl = response.contextUrl || response.url || previousUrl;
  exchange.append(user, reply);
  thread.append(exchange);
  while (thread.children.length > 11) thread.firstElementChild.remove();
  thread.scrollTop = thread.scrollHeight;
  input.value = '';
  input.focus({preventScroll:true});
}
form.addEventListener('submit', event => {event.preventDefault();send(input.value);});
document.querySelectorAll('[data-ella-suggestion]').forEach(button => button.addEventListener('click', () => send(button.dataset.ellaSuggestion)));
