import { DateTime } from './luxon.min.js';

export default function timenow() {
  const time = DateTime.now();
  document.querySelector('.time').innerHTML = time.toLocaleString(DateTime.DATETIME_MED);
  setTimeout(timenow, 1000);
}