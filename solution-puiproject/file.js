function animateText() {
  const textElement = document.getElementById('welcome');

  const text = textElement.textContent;
  textElement.innerHTML = '';
  for (const letter of text) {
    const span = document.createElement('span');
    span.textContent = letter;
    textElement.appendChild(span);
  }

  anime.timeline()
    .add({
      targets: '#welcome span',
      opacity: [0, 1],
      translateY: [20, 0],
      translateZ: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: (el, i) => 50 * i
    })
    .add({
      targets: '#welcome span',
      opacity: 1,
      translateY: [0, -20],
      translateZ: 0,
      duration: 1000,
      easing: 'easeInExpo',
      delay: (el, i) => 50 * i
    });
}

// Trigger the animation when the page loads
window.onload = function () {
  animateText();
};

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});

setTimeout(function() {
  // Display the body content after the delay
  document.body.style.display = 'block';
}, 500);


function animateRow(){
  anime({
    targets: '.row-howto',
    opacity: 1, 
    easing: 'easeInQuad',
    delay: anime.stagger(1000);
  })
}

window.onload = function () { 
  animateRow();
};

// class Book { 
//   constructor (title, text, bookphoto) {
//     this.title = title;
//     this.text = text; 
//     this.bookphoto =  bookphoto;  
//   }
// }

// const bookSet = new Set (); 

// function addBook(title, text, bookphoto){
//   const book = new Book(title, text, bookphoto); 
//   bookSet.add(book); 
//   saveBooksToLocalStorage();
//   return book;
// }

// function updateBook(book){
//   const template = document.querySelector('#book-template');
//   const clone = template.content.cloneNode(true);

//   book.element = clone.querySelector('.book');
//   book.element.querySelector('.bookpic').src = book.bookphoto; 
//   book.element.querySelector('.booktitle').textContent = book.title;
//   book.element.querySelector('.booktext').textContent = book.text;

//   const bookshelf = document.querySelector('#bookshelf-all');
//   bookshelf.appendChild(book.element);
// }

// function submitBook(){
//   const inputtitle = document.querySelector('#inputtitle');
//   const inputtext = document.querySelector('#inputtext');

//   const title = inputtitle.value; 
//   const text = inputtext.value; 
//   const bookphoto = "project/cover.png";

//   const book = addBook(title, text, bookphoto);
//   updateBook(book); 

// }

// function saveBooksToLocalStorage() {
//   const booksArray = Array.from(bookSet); // Convert the set to an array
//   const booksArrayString = JSON.stringify(booksArray); // Serialize the array to a string
//   localStorage.setItem('bookstore', booksArrayString); // Save the string to local storage
// }

// function loadBooksFromLocalStorage() {
//   const booksArrayString = localStorage.getItem('bookstore');
//   if (booksArrayString) {
//     const booksArray = JSON.parse(booksArrayString); // Deserialize the string back into an array
//     for (const bookData of booksArray) {
//       const book = new Book(bookData.title, bookData.text, bookData.bookphoto); // Recreate Book objects
//       bookSet.add(book);
//       updateBook(book); // Update the DOM with the book
//     }
//   }
// }

// window.onload = function() {
//   loadBooksFromLocalStorage();
// };


