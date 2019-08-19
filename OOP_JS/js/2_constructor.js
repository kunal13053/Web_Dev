// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2019');

// console.log(book1);
// console.log(book2);

console.log(book1.getSummary());
console.log(book2.getSummary());

// We don't have to write each object separately because of Constructor
