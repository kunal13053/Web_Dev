// console.log('Hello WOrld');
// console.error('This is an error');
// console.warn('This is a warning');

///////////VARIABLES//////////
// 3 ways: var, let, const
// var: globally scoped, NOT used anymore
// let -> reassigning is allowed.
// const -> reassigning not allowed.
// NOTE-> always use const unless you know you are going to reassign the value(eg: score, count)

// DATA-TYPES:
// Primitive data-types: String, Numbers, Boolean, null, undefined, symbol(later)
// const name = 'John';
// const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null; //typeof will return 'object' as return value which is bogus. Google 'null' return value'
// const y = undefined;
// let z; //undefined

// console.log(typeof z);
// // String
// const name = 'John';
// const age = 30;
// // C0ncatenation
// console.log('My name is' + name + 'and I am ' + age); //NOt this
// console.log(`My name is ${name} and I am ${age}`);

// const s = 'Hello WOrld!';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// const str = 'tech, computers, code, IT';
// console.log(s.split(''));
// console.log(str.split(','));
/*Multi
Line
Comments
*/

/////ARRAYS
// const numbers = new Array(1, 2, 3, 4, 5);
// // console.log(numbers);
// const fruits = ['apples', 'oranges', 'pear', 'grapes', 1, null];

// fruits[6] = 'mangoes';
// // OR
// fruits.push('strawberries'); //Add value to the end
// fruits.unshift('papaya'); //Add element at end
// fruits.pop(); //   remove element in the end
// console.log(fruits);
// console.log(fruits[1]);
// console.log(Array.isArray('mangoes')); //Check if something is in array
// console.log(fruits.indexOf('apples'));  //Get index of an element
// ///
// ///// Object literals
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main street',
//     city: 'Boston',
//     state: 'MA'
//   }
// };

// // alert(person);
// console.log(person);
// console.log(person.hobbies[1]);

// // Destructuring(Pulling out variables from an abject )
// const {
//   firstName,
//   lastName,
//   address: { city }
// } = person;
// console.log(firstName);
// console.log(city);

// person.email = 'john@email.com';
// console.log(person);

// ARRAY of OBJECT
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
//   },
//   {
//     id: 1,
//     text: 'Meeting with Boss',
//     isCompleted: false
//   },
//   {
//     id: 1,
//     text: 'Dentist appointment',
//     isCompleted: true
//   }
// ];

// // console.log(todos);
// // console.log(todos[1].text);

// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);

// // LOOPS
// for (let i = 0; i < 10; i++) {
//   console.log(`For loop i : ${i}`);
// }

// // while
// let i = 0;
// while (i < 10) {
//   console.log(`While loop i = ${i}`);
//   i++;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let item of todos) {
//   console.log(item.text);
// }

// // High Ordered Array Methods (Suitable for looping through arrays)
// // forEach, map, filter => Each of them take in a function
// console.log('forEach:\n');
// todos.forEach(function(item) {
//   console.log(item.text);
// });

// //map returns the array
// console.log('map:\n');
// const todoText = todos.map(function(item) {
//   return item.text;
// });
// console.log(todoText);

// // filter
// console.log('Filter');
// const todoCompleted = todos.filter(function(item) {
//   return item.isCompleted == true;
// });
// console.log(todoCompleted);

// // Chaining other array methods
// console.log('Filter + map');
// const todoCompletedText = todos
//   .filter(function(item) {
//     return item.isCompleted == true;
//   })
//   .map(function(item) {
//     return item.text;
//   });
// console.log(todoCompletedText);

// CONDITIONALS
// "===" means DATATYPE MATCHING & "==" means NO DATATYPE MATCHING
// const x = 12;
// const y = 10;
// if (x === 10 || y > 5) {
//   console.log(`True`);
// }
// //else if (x > 10) {
//   console.log('x is greater than 10');
// } else {
//   console.log('x is less than 10');
// }
// // // //Ternary Operator "?" means "than" ":" means or
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// // console.log(color);

// // SWITCH CASES
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue');
//     break;
// }

// // FUNCTIONS
// function addNums(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNums(5, 4));

// // Arrow Functions
// const addNums2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addNums2(5, 5));

// // SHorter Arrow Function Example
// const addNums1 = (num1, num2) => num1 + num2; //When there is only one line in function
// console.log(addNums1(1, 2));

// // Even Shorter Arrow Function, When only one parameter
// const addNums3 = num1 => num1 + 5;
// console.log(addNums3(5));

// OOPS in ES-5
// Constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   // this.dob = dob;
//   this.dob = new Date(dob); //Using Date object
// }

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// // Instantiate
// const person1 = new Person('John', 'Doe', '1-1-1999');
// const person2 = new Person('Mary', 'Smith', '5-8-1995');

// console.log(person1);
// // console.log(person2.dob.getFullYear());
// // console.log(person1.getBirthYear());
// console.log(person2.getFullName());

// OOPS in ES-6 (classes added for more prettier way to write code)
// class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // Instantiate
// const person1 = new Person('John', 'Doe', '1-1-1999');
// const person2 = new Person('Mary', 'Smith', '5-8-1995');

// console.log(person1);
// // console.log(person2.dob.getFullYear());
// // console.log(person1.getBirthYear());
// console.log(person2.getFullName());

// ////////DOM(Document Object Model)
// Selectors:
// Single Element(HTML elements) Selector(single element sector)
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('h1'));

// // Multiple element Selector: can select multiple elements
// console.log(document.querySelectorAll('.item')); //Returns NodeList which is same as an array

// // Looping through
// const items = document.querySelectorAll('.item');
// items.forEach(item => console.log(item));

// // Manipulating the DOM(User Interface)
// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Kunal';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';

// const btn = document.querySelector('.btn');
// //there are differents events like mouseover, click, mouse out, etc., see more in mdn documentation
// btn.addEventListener('mouseout', e => {
//   e.preventDefault(); //To prevent default behavious
//   //   console.log(e);
//   //   console.log('click');
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML =
//     '<h1>Hello</h1>';
// });

// ///// Adding Some functionality to the form
// Start by Selecting the elements from DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //   console.log(nameInput.value);

  if (nameInput.value == '' || emailInput.value == '') {
    // alert('Please enter fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please Enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log('success');
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    // Clear Fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
