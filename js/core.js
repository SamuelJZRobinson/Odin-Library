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
  e.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const genre = document.querySelector("#genre").value;
  const totalPages = parseInt(document.querySelector("#total-pages").value);
  const readStatus = document.querySelector("#read-status").checked;
  const NEW_BOOK = new Book(title, author, genre, totalPages, readStatus);
  library.addBook(NEW_BOOK);
  closeForm();
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
    this.showBooks();
  }

  removeBook(title) {
    this.books.forEach(book => {
      if (book.title == title){
        this.books.pop();
        this.showBooks();
        return;
      }
    });
  }

  toggleReadStatus(title) {
    this.books.forEach(book => {
      if (book.title == title){
        book.readStatus = !book.readStatus;
        console.log(library.books);
        this.showBooks();
        return;
      }
    });
  }

  showBooks() {
    // Clear previous books
    BOOK_CONTAINER.innerHTML = "";

    // Create cards for all books
    this.books.forEach(book => {
      // Prepare card
      const BOOK_CARD = document.createElement("div");
      BOOK_CARD.classList.add("book-card");

      const TITLE = document.createElement("p");
      TITLE.textContent = `${book.title}`;
      TITLE.classList.add("title");

      const AUTHOR = document.createElement("p");
      AUTHOR.textContent = `${book.author}`;

      const GENRE = document.createElement("p");
      GENRE.textContent = `${book.genre}`;

      const TOTAL_PAGES = document.createElement("p");
      TOTAL_PAGES.textContent = `${book.totalPages} Pages`;

      const BUT_READ = document.createElement("button");
      BUT_READ.textContent = "Read";
      BUT_READ.addEventListener("click",(e)=>{
        console.log(TITLE.textContent);
        library.toggleReadStatus(TITLE.textContent);
      });
      if(book.readStatus){
        BUT_READ.classList.add("filled");
      }  
      else{
        BUT_READ.classList.add("outlined");
      }    

      const BUT_DELETE = document.createElement("span");
      BUT_DELETE.textContent = "delete";
      BUT_DELETE.classList.add("material-symbols-outlined");
      BUT_DELETE.classList.add("delete");
      BUT_DELETE.addEventListener("click",(e) =>{
        library.removeBook(TITLE.textContent);
      });

      BOOK_CARD.append(TITLE,AUTHOR,GENRE,TOTAL_PAGES,BUT_READ,BUT_DELETE);

      // Append container
      BOOK_CONTAINER.appendChild(BOOK_CARD);
    });
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
}

// Create Library
const library = new Library();