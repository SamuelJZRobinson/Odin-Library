const BUT_ADD_BOOK = document.querySelector("#add-book");

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