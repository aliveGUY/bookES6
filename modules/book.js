export default class Methods {
  constructor(title, Author, id) {
    this.title = title;
    this.Author = Author;
    this.id = id;
  }

  upload() {
    const data = JSON.parse(localStorage.getItem('Data')) || [];
    data.push(this);
    localStorage.setItem('Data', JSON.stringify(data));
    document.location.reload();
  }

  delete() {
    const data = JSON.parse(localStorage.getItem('Data'));
    data.splice(this.id, 1);
    localStorage.setItem('Data', JSON.stringify(data));
    document.location.reload();
  }
}