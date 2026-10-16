import { answerElla } from './ella-answers.js';
const form = document.getElementById('ellaComposer');
const input = document.getElementById('ellaQuestion');
const thread = document.getElementById('ellaThread');
function send(question) {
  const text = question.trim().slice(0, 500);
  const response = answerElla(text);
  if (!response) return;
  const exchange = document.createElement('div');
  exchange.className = 'ella-exchange';
  const user = document.createElement('p');
  user.className = 'ella-bubble user';
  user.textContent = text;
  const reply = document.createElement('p');
  reply.className = 'ella-bubble';
  reply.textContent = response.answer;
  if (response.url) {
    const link = document.createElement('a');
    link.className = 'ella-answer-link';
    link.href = response.url;
    link.textContent = `Read: ${response.label} ↗`;
    reply.append(link);
  }
  exchange.append(user, reply);
  thread.append(exchange);
  while (thread.children.length > 11) thread.firstElementChild.remove();
  thread.scrollTop = thread.scrollHeight;
  input.value = '';
  input.focus({preventScroll:true});
}
form.addEventListener('submit', event => {event.preventDefault();send(input.value);});
document.querySelectorAll('[data-ella-suggestion]').forEach(button => button.addEventListener('click', () => send(button.dataset.ellaSuggestion)));
