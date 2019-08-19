class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclasses
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month;
  }
}

// instantiate Object
const mag1 = new Magazine('Mag One', 'John Doe', '2019', 'August');

console.log(mag1.getSummary());
