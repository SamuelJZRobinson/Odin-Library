const FORM_CONTAINER = document.querySelector("#form-container");
const FORM_ADD_BOOK = document.querySelector("#form-add-book");
const BUT_ADD_BOOK = document.querySelector("#add-book");
const BUT_CLOSE_FORM = document.querySelector("#form-close");

BUT_ADD_BOOK.addEventListener("click",(e) =>{
  FORM_CONTAINER.style.display = "block";
})

BUT_CLOSE_FORM.addEventListener("click",(e) =>{
  FORM_CONTAINER.style.display = "none";
  FORM_ADD_BOOK.reset();
});

function closeForm(){

}

function Library(){
  this.books = [];

  this.addBook = function(){
    // Get data from form
    const newBook = new Book("title", "author", "genre", "pages", "favourite", "status");
    this.books.push(newBook);
  }

  this.getBooks = function(){
    return this.books;
  }
}

function Book(title, author, genre, pages, favourite, status){
 this.title = title;
 this.author = author;
 this.genre = genre;
 this.totalPages = pages;
 this.favourite = favourite;
 this.Readstatus = status;

 this.getInfo = function(){
  return [title,author,genre,totalPages,favourite,status];
 }
}

// Create Library
const library = new Library();

library.addBook();
console.log(library.getBooks());