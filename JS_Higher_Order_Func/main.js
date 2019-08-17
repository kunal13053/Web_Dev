const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Standard for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach(Better way to loop through array)
// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter (to filter things out from array)

// We will try to get all ages 21 and older.
// First lets see using normal for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Now using filter using ES5 version
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// Now Using ES6 Arrow function(Better Way to do it)
const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// FIlter the retail companies
// ES5 version
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// Using ES6 arrow function
// const retailCompanies = companies.filter(
//   company => company.category === 'Retail'
// );
// console.log(retailCompanies);

// Get 80's companies
// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start >= 1980 && company.start < 1990) {
//     console.log(company);
//   }
// });

// Using ES6 Arrow function
// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// MAP create new arrays from the current array
// Grab all company name and put them in a new array

// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(
//   company => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

// console.log(ageMap);

// // Sort
// Sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort ages
// const sortAges = ages.sort((a, b) => a - b); // To sort in increasing order
// const sortAges = ages.sort((a, b) => b - a); // To sort in decreasing order

// console.log(sortAges);

// ----------REDUCE---------

// Find sum of all ages
// Using for loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// Using ES 5
// const ageSum = ages.reduce(function(t  otal, age) {
//   return total + age;
// }, 0);   // 0 is total

// Using ES6 Arrow function
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// Using ES6 arrow functions
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// ------------ Combine Methods ---------------
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .reduce((a, b) => a + b, 0);
console.log(combined);
