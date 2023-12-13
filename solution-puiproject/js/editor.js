//referenced Labs 3-6 on how to submit note and update note based on input to mimic the bookshelf input 
//referenced last homework for local storage saving and retrieving

class Book { 
  constructor (title, text, bookphoto) {
    this.title = title;
    this.text = text; 
    this.bookphoto =  bookphoto;  
  }
}

const bookSet = new Set (); 

function addBook(title, text, bookphoto){
  const book = new Book(title, text, bookphoto); 
  bookSet.add(book); 
  saveBooksToLocalStorage();
  return book;
}

function updateBook(book){
  const template = document.querySelector('#book-template');
  const clone = template.content.cloneNode(true);

  book.element = clone.querySelector('.book');
  book.element.querySelector('.bookpic').src = book.bookphoto; 
  book.element.querySelector('.booktitle').textContent = book.title;
  book.element.querySelector('.booktext').textContent = book.text;

  const bookshelf = document.querySelector('#bookshelf-all');
  bookshelf.appendChild(book.element);
}

function submitBook(){
  const inputtitle = document.querySelector('#inputtitle');
  const inputtext = document.querySelector('#inputtext');

  const title = inputtitle.value; 
  const text = inputtext.value; 
  const bookphoto = "project/cover.png";

  const book = addBook(title, text, bookphoto);
  updateBook(book); 

}

function saveBooksToLocalStorage() {
  const booksArray = Array.from(bookSet); 
  const booksArrayString = JSON.stringify(booksArray); 
  localStorage.setItem('bookstore', booksArrayString); 
}

function loadBooksFromLocalStorage() {
  const booksArrayString = localStorage.getItem('bookstore');
  if (booksArrayString) {
    const booksArray = JSON.parse(booksArrayString); 
    for (const bookData of booksArray) {
      const book = new Book(bookData.title, bookData.text, bookData.bookphoto); 
      bookSet.add(book);
      updateBook(book); 
    }
  }
}

window.onload = function() {
  loadBooksFromLocalStorage();
};


