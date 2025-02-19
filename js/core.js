// Tutorials Used:
// Dors Coding School. (16 February 2023). THE ODIN PROJECT: LIBRARY | PROJECT SOLUTION. YouTube. https://youtu.be/9YGgC1WPpf4?si=FaXysCqYdWZeKfnr

// DOM
const FORM_CONTAINER = document.querySelector("#form-container");
const FORM_ADD_BOOK = document.querySelector("#form-add-book");
const BUT_OPEN_FORM = document.querySelector("#open-form");
const BUT_CLOSE_FORM = document.querySelector("#close-form");
const BOOK_CONTAINER = document.querySelector("#book-container");

// Events
// Open Form
BUT_OPEN_FORM.addEventListener("click",(e) =>{
  FORM_CONTAINER.style.display = "block";
})

// Close Form
BUT_CLOSE_FORM.addEventListener("click",(e) =>{
  closeForm();
})

// Submit Form
FORM_ADD_BOOK.addEventListener("submit",(e) =>{
  // Stop default form submission
  e.preventDefault();
  const TITLE = document.querySelector("#title").value.trim();
  const AUTHOR = document.querySelector("#author").value.trim();
  const GENRE = document.querySelector("#genre").value;
  const TOTAL_PAGES = parseInt(document.querySelector("#total-pages").value);
  const READ_STATUS = document.querySelector("#read-status").checked;
  const NEW_BOOK = new Book(TITLE, AUTHOR, GENRE, TOTAL_PAGES, READ_STATUS);

  const BOOK_EXISTS = library.books.some(book => book.title.toLowerCase() === TITLE.toLowerCase());
  if (BOOK_EXISTS) {
    alert("A book with this title already exists.");
  }
  else {
    library.addBook(NEW_BOOK);
    closeForm();
  }
})

// Core Logic
function closeForm() {
  FORM_CONTAINER.style.display = "none";
  FORM_ADD_BOOK.reset();
}

class Library {
  constructor(){
    this.books = [];
  }
    
  addBook(newBook) {
    this.books.push(newBook);
    this.updateBookUI();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.updateBookUI();
  }

  toggleRead(index) {
      this.books[index].toggleRead();
      this.updateBookUI();
  }

  updateBookUI() {
    BOOK_CONTAINER.innerHTML = "";

    for (let i = 0; i < library.books.length; i++) {
      let book = library.books[i];
      const BOOK_CARD = document.createElement("div");
      BOOK_CARD.classList.add("book-card");
      BOOK_CARD.innerHTML = `
      <p class="title">${book.title}</p>
      <p>${book.author}</p>
      <p>${book.genre}</p>
      <p>${book.totalPages}</p>
      <span class="material-symbols-outlined delete" onclick="library.removeBook(${i})">delete</span>
      <button class="toggle-read ${book.readStatus ? 'filled' : 'outlined'}" onclick="library.toggleRead(${i})">Read</button>
      `;

      BOOK_CONTAINER.appendChild(BOOK_CARD);
    }
  }
}

class Book {
  constructor(title, author, genre, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalPages = pages;
    this.readStatus = readStatus;
  }

  toggleRead() {
    this.readStatus = !this.readStatus;
  }
}

// Create Library
const library = new Library();