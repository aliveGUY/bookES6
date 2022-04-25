const fillValues = (book, data, index) => {
  book.id = index;
  book.querySelector('.Book-h2').innerHTML = data.title;
  book.querySelector('.Book-h3').innerHTML = data.Author;
};

const Draw = (data) => {
  const lsit = document.querySelector('.book-list');
  let index = 0;
  if (lsit !== null) {
    const book = lsit.querySelector('.Book');
    data.forEach((item) => {
      const aBook = book.cloneNode(true);
      fillValues(aBook, item, index);
      lsit.appendChild(aBook);
      index += 1;
    });
    book.remove();
  }
};

export default Draw;
