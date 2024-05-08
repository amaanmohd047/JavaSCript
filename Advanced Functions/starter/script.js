'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers=1, price=4550*numPassengers) {
//   // ES5 Way
//   // numPassengers |= 1;
//   // price |= 4550;

//   const detail = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   bookings.push(detail);
//   console.log(`Flight Booked: ${numPassengers}, ${flightNum}, Rs.${price}.`);
// }

// createBooking("LMV20");
// createBooking('LMV20', 3);
// createBooking("LMV20", 2, 8000);
// createBooking("LMV20", undefined, 4000);

// ------------------------------------

/* FIRST ORDER FUNCTIONS
 => JS treats functions as first class citizens
 => This means that they are simply values
 => Functions are just another type of Objects
  For Ex:
  - first order func can be stored in a variable or passed as value for a key in object.
  - first order func can be passed as other function's argument (callback)
  - first order func can be returned from a function
  - methods can be called on first order functions
*/

/* HIGHER ORDER FUNCTIONS
  => A function that recieves another function as argument, that returns a new function, or both
  => This is possible because of the first-class functions.
  For Example:
    - A function that returns a first order function
    - A function that takes a callback func as argument
*/

/*
// first order func
function removeSpace(str) {
  return str.replaceAll(' ', '');
}

// first order func
function upperFirstName(str) {
  const [first, ...words] = str.split(' ');
  return [first.toUpperCase(), ...words].join(' ');
}

// Higher Order function
const transformString = (str, func) => {
  console.log(`Original String: ${str} \nTransformed String: ${func(str)} \nTransformed By: ${func.name}.`);
}

transformString('Apun the Great!', removeSpace);
transformString('Apun the Great!', upperFirstName);

*/

/*

// // // FUNCTIONS RETURNING FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const hello = greet('Hello');
hello('Amaan');

greet("Salam")('Birju!');
*/


//------------------------
// // // call AND apply METHODS

const emirates = {
  airline: 'Emirates',
  iatacode: 'EK',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

emirates.book(234, 'Vermithor');
emirates.book(129, 'Mohammed Amaan');
emirates.book(234, 'Rabbits Foot');

// another object that uses same function as above
const emiratesIndia = {
  airline: 'Emirates India',
  iatacode: 'EI',
  bookings: [],
};

const book = emirates.book;

// // Since it has created a copy so 'this' will point to undefined rather than the 'emirates' object
// book(129, 'Rumi');

// .call() method tells 'this' will point to which function and then the arguments followed by it.
// It means that the 'this' from the emirates object will point to the emiratesIndia object.
book.call(emirates, 129, 'Rumi');
book.call(emiratesIndia, 134, 'SunFyre');
Book.call(emiratesIndia, 156, "sdfsgfdsg")

// // // apply method
// .apply() method works similar, it takes function to which 'this' will point to the the remaining argument in the form of an array
const passenger = [134, 'Arrax'];
book.apply(emiratesIndia, passenger);

// There's a better way of doing the same thing
const psngr2 = [134, 'Vermax'];
book.call(emiratesIndia, ...psngr2);

// --------------------------------------------------
// // // Bind Method
// bind sets the 'this' to the function and returns that function

const bookIE = book.bind(emiratesIndia);

bookIE(134, 'Baelarion');

const emiratesMars = {
  airline: 'Emirates Mars',
  iatacode: 'EM',
  bookings: [],
};

const bookEM = book.bind(emiratesMars);

bookEM(100, 'Syrax');
bookEM(100, 'Caraxes');
bookEM(100, 'Vhagar');

// bind can also be used to pass specific arguments every time the function is called
const bookEM231 = book.bind(emiratesMars, 231);

bookEM231('DreamFyre');
bookEM231('Moondancer');

emirates.seats = 120;
emirates.getMoreSeats = function () {
  this.seats++;
  console.log(this.seats);
}

// document.querySelector(".buy").addEventListener('click', emirates.getMoreSeats);
// the above code's solution is to use bind rather than call as call method calls the function and bind returns a function.
document.querySelector(".buy").addEventListener('click', emirates.getMoreSeats.bind(emirates));
emirates.getMoreSeats();

// bind can also be used to predefined certain parameters of a function in an instance
const addTax = (rate, amount) => console.log(amount + (rate/100)*amount);

// Partial Application of bind
// since we don't have a this for arrow function, or if we don't care bout this, we have to set it to null. 
const addGST = addTax.bind(null, 18);
// addGST = (this:function, amount) => console.log(amount + (18/100)*amount);

addGST(1000);
addGST(867);

// implementation of hardcoded addGST
function addTax2(rate) {
  return function (amount) {
    console.log(amount + (rate/100)*amount);
  }
} 

addTax2(18)(1000);

const addGST2 = addTax2(18);
addGST2(1000);

console.log(emirates);
console.log(emiratesIndia);
console.log(emiratesMars);



///////////////////////// Coding Challenge
/*  
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

// // Solution: 
const poll = {
  question: 'What is your favorite Programming Language?',
  options: ['0. Javascript', '1.Python', '2.Rust', '3.C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = Number(prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`));
    typeof input === 'number' && input < this.answers.length  && this.answers[input]++;
  },

  displayResults(type = 'array') {
    if (type.toLowerCase() === 'array') {
      console.log(this.answers);
    } else if (type.toLowerCase() === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    }
  },
};


Function sum () { // code} ==> function declaration
sum();

fetch();

Const sum = () => {} ===> ano function

Const sum = function() {} ===> function expression




document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

const test1 =poll.displayResults.bind({ answers: [5,2,3], });
const test2 = poll.displayResults.bind({ answers: [1, 5, 3, 9, 6, 1], });

test1();
test2();
test1('String');
test2('String');


// ----------------------------------
// // // CLOSURES in JS
"variable.other.property.js"

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


( function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  });

}) ();
