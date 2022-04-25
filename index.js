import Methods from './modules/book.js';
import Draw from './modules/list.js';
import timenow from './modules/time.js';
import topbar from './modules/nav.js';

const data = JSON.parse(localStorage.getItem('Data')) || [];
Draw(data);
const form = document.forms[0];
const button = form.elements.add;
const book = new Methods();
const dltBtn = document.querySelectorAll('.Delete-btn');
const nav = document.querySelectorAll('.Nav-btn');
nav.forEach((item) => {
  item.onclick = () => {
    topbar(item);
  };
});

form.addEventListener('input', (e) => {
  book[e.target.id] = form.elements[e.target.id].value;
  button.onclick = () => {
    book.upload();
  };
});

dltBtn.forEach((btn) => {
  btn.onclick = (e) => {
    book.id = e.target.parentNode.id;
    book.delete();
  };
});
setTimeout(timenow, 1000);
