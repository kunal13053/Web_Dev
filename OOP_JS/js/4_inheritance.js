// ------------ Basic prototype inheritance without classes

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary made prototype method because Every books will definitely have title, author, year but not necessarily have getSummary function() for every book
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine inherits Book class
// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year); //1st parameter is magazine/instance itself

  this.month = month;
}

// Inherit Prototype functions from parent class(which is Book in this case)
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine object
const mag1 = new Magazine('Mag One', 'John Doe', '2019', 'August');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// console.log(mag1.getSummary());
console.log(mag1);
