// // // In JS everything is almost object(strings, number, boolean are primitives)

// // const s1 = 'Hello';
// // // console.log(str.toUpperCase());
// // console.log(typeof s1); //returns string

// // // can also create string as object
// // const s2 = new String('Hello');
// // console.log(typeof s2); //returns object

// // DOM object
// // console.log(window);
// // Window is an absolute parent object(there is nothing above window) in DOM objects so we can simply write 'alert()' instead of 'window.alert()'
// // alert(1);    //window.alert is an object not a method
// console.log(navigator.appVersion()); //window.navigator.appVersion is an object not a method

// ---------- OBJECT LITERALS -------------
const book1 = {
  title: 'Book One',
  author: 'Jon Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: '2019',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());
console.log(book2.getSummary());

// You can see we are writing each object separately which is not the right way
