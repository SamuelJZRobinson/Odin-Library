class Library{
  constructor(){
    this.books = [];
  }
    
    addBook(title, author, genre, pages, favourite, readStatus){
      const newBook = new Book(title, author, genre, pages, favourite, readStatus);
      this.books.push(newBook);
    }
    
    getBooks(){
      return this.books;
    }
}

class Book{
  constructor(title, author, genre, pages, favourite, readStatus) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalPages = pages;
    this.favourite = favourite;
    this.readStatus = readStatus;
  }

 getAllInfo(){
  return [this,title, this.author,this.genre, this.totalPages, this.favourite, this.readStatus];
 }
}

// Create Library
const library = new Library();

// DOM Elements
const FORM_CONTAINER = document.querySelector("#form-container");
const FORM_ADD_BOOK = document.querySelector("#form-add-book");
const BUT_OPEN_FORM = document.querySelector("#but-open");
const BUT_CLOSE_FORM = document.querySelector("#but-close");

// Open Form
BUT_OPEN_FORM.addEventListener("click",(e) =>{
  FORM_CONTAINER.style.display = "block";
})

// Close Form
BUT_CLOSE_FORM.addEventListener("click",(e) =>{
  closeForm();
})

function closeForm() {
  FORM_CONTAINER.style.display = "none";
  FORM_ADD_BOOK.reset();
}

// Submit Form
FORM_ADD_BOOK.addEventListener("submit",(e)=>{
  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const genre = document.querySelector("#genre").value;
  const totalPages = parseInt(document.querySelector("#total-pages").value);
  const readStatus = document.querySelector("#read-status").checked;
  const favourite = document.querySelector("#favourite").checked;

  library.addBook(title, author, genre, totalPages, readStatus, favourite);

  closeForm();
  console.log(library.getBooks());
  e.preventDefault();
})