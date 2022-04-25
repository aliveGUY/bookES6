document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('list').click();
});

export default function topbar(item) {
  document.querySelector('.book-list').classList.toggle('hidden', (item.id !== 'list'));
  document.querySelector('.add-book').classList.toggle('hidden', (item.id !== 'add'));
  document.querySelector('.contact').classList.toggle('hidden', (item.id !== 'contact'));
}