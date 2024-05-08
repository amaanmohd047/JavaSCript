'use strict';

// Constructor function
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
  // ------Bad way of defining method 
  // this.calcBirthYear = () => {
  //   return `${2023 - age}`;
  // }
}

// better way defining method
Person.prototype.calcBirthYear = function() {
  console.log(`${2023 - this.age}`);
};

// Static method for class Person
Person.hey = function() {
  console.log("Hello, World! 😊");
}

const jalu = new Person('Jalu Yadav', 20);

console.log(jalu);
console.log(jalu.calcBirthYear());
*/

// ===============   ES6 Classes =======================

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  // to get a property
  get age() {
    return 2024 - this.birthYear;
  }

  // to set a property
  set birthPlace(place) {
    this._birthPlace = place;
  }

  get birthPlace() {
    return this._birthPlace;
  }

  // static method
  // static from([name, birthYear]) {

  // }
}

const jalu = new Person('Jalu Yadav', 1968);
/*

c8d3f5 

*/
jalu.calcAge();
const x = 0;
let y = 0;

const ob = {
  name: 'hello',
  age: 'hello',
};

// Getters and Setters

console.log(jalu.age);

jalu.birthPlace = 'Bihar';

console.log(jalu);
console.log(jalu.birthPlace);

// Encapsulation

class Account {
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;
  #username;

  constructor(name, year, pin) {
    this.name = name;
    this.year = year;
    this.#pin = Number(pin);
    this.#username = name.split(' ')[0].toLowerCase();
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val, name, pin) {
    if (this.#approveLoan(name, pin)) {
      this.deposit(val);
      console.log(`Loan of ${val}|B Approved.`);
    } else {
      console.log(
        `Loan not approved. \nPlease check your username and pin or try later.`
      );
    }
    return this;
  }

  getDetails() {
    console.log(`
    Account Holder  : ${this.name},
    Birth Year      : ${this.year},
    Current Balance : ${this.#movements.reduce(
      (acc = 0, mov) => (acc += mov)
    )}|B,
    Locale          : ${this.locale}.
    `);
    return this;
  }

  #approveLoan(name, pin) {
    if (pin === this.#pin && name === this.#username) return true;
    else return false;
  }
}

const harry = new Account('Harry Potter', 2003, '1111');

harry.deposit(100);
harry.deposit(100);
harry.deposit(100);
harry.deposit(100);
harry.deposit(100);

const val = 120;

function hello(str) {
  console.log(str);
}

harry.withdraw(val);
harry.withdraw(120);
harry.withdraw(120);

harry.getDetails();

harry
  .deposit(120)
  .deposit(100)
  .withdraw(120)
  .requestLoan(2000, 'harry', 1111)
  .getDetails();

function hello() {
  const x = 0;
  let y = 0;
  console.log(x, y);
}
