// Book Class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: Handle UI tasks
class UI {
  // Methods of UI class will be static because we will not instantiate UI class
  static displayBooks() {
    const books = Store.getBooks(); //Setting books to the array

    books.forEach(book => UI.addBookToList(book)); //Looping through and calling method on that book
  }

  static addBookToList(book) {
    // Grab the element
    const list = document.querySelector('#book-list');

    // Create a row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button href="#" class="btn btn-danger btn-sm delete">X</button></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form); //insert div before form

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    // TO remove will use ISBN because its unique(like primary key)
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn == isbn) {
        books.splice(index, 1); //splice it out of the array
      }
    });

    // Reset local storage with that books that has been removed

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
  // prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if (title == '' || author == '' || isbn == '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    // Add book to Store
    Store.addBook(book);

    // Show Success Message
    UI.showAlert('Book Added', 'success');
    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
// use event Propogation instead of event listener
document.querySelector('#book-list').addEventListener('click', e => {
  // Remove Book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show Success Message
  UI.showAlert('Book Removed', 'success');
});
