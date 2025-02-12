// DOM Elements
const FORM_CONTAINER = document.querySelector("#form-container");
const FORM_ADD_BOOK = document.querySelector("#form-add-book");
const BUT_OPEN_FORM = document.querySelector("#but-open");
const BUT_CLOSE_FORM = document.querySelector("#but-close");
const CARD_CONTAINER = document.querySelector("#card-container");

class Library{
  constructor(){
    this.books = [];
  }
    
  addBook(title, author, genre, pages, readStatus){
    const newBook = new Book(title, author, genre, pages, readStatus);
    this.books.push(newBook);
    console.log(library.books);
    this.showBooks();
  }

  removeBook(title){
    this.books.forEach(book => {
      if (book.title == title){
        this.books.pop();
        console.log(library.books);
        this.showBooks();
        return;
      }
    });
  }

  showBooks(){
    // Clear previous books
    CARD_CONTAINER.innerHTML = "";

    // Create cards for all books
    this.books.forEach(book => {
      // Prepare card
      const CARD = document.createElement("div");
      CARD.classList.add("card");

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

      const BUT_REMOVE = document.createElement("span");
      BUT_REMOVE.textContent = "delete";
      BUT_REMOVE.classList.add("material-symbols-outlined");
      BUT_REMOVE.classList.add("but-delete");
      BUT_REMOVE.addEventListener("click",(e) =>{
        library.removeBook(TITLE.textContent);
      });

      CARD.append(TITLE,AUTHOR,GENRE,TOTAL_PAGES,BUT_READ,BUT_REMOVE);

      // Append container
      CARD_CONTAINER.appendChild(CARD);
    });
  }
}

class Book{
  constructor(title, author, genre, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalPages = pages;
    this.readStatus = readStatus;
  }

 getAllInfo(){
  return [this,title, this.author,this.genre, this.totalPages, this.readStatus];
 }
}

// Create Library
const library = new Library();

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

  library.addBook(title, author, genre, totalPages, readStatus);

  closeForm();
  e.preventDefault();
})