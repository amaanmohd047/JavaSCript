/*
const arr = [1, 2, 4, 5, 6, 7];

// to slice some elements without deleting - does not mutate the original array
console.log(arr.slice(2, -1));
console.log(arr);

// to remove some elements - mutates the original array
console.log(arr.splice(1, 3));
console.log(arr);

const a2 = ['a', 's', 'd', 'f', 'g', 'h'];

// Reverse - mutates the original array
console.log(a2);
console.log(a2.reverse());

// concat - does not mutate the original array
// method 1
console.log(arr.concat(a2));

// method 2
console.log([...arr, ...a2]);

// Join
console.log(a2.join(" -> "));

// shift - removes the first index
a2.shift();
console.log("shift :: " + a2.join(" -> "));

// unshift - appends given value at first index
a2.unshift('h');
console.log("unshift :: " + a2.join(" -> "));

// pop - removes the last element from the array
a2.pop();
console.log("pop :: " + a2.join(" -> "));

// push - appends the array in the end with given value
a2.push('a');
console.log("push :: " + a2.join(" -> "));

// at method 
console.log(a2.at(0));

// getting the last element of an array
// method 1
console.log(a2[a2.length -1]);

// method 2
console.log(a2.slice(-1)[0]);

// method 3
console.log(a2.at(-1));

For Each method 
const a1 = [12, 14, 15, 16, 13, 7, 17, 20];

forEach arguments
array.forEach(function (currentElement, index, array) { })

a1.forEach((element, index, array) => {
  if (element % 2 === 0) {
    console.log(`${index+1}: ${element} is an even number.`);
  } else {
    console.log(`${index+1}: ${element} is an odd number.`);
  }
});
continue And break does not work in forEach loop.

forEach arguments for map
map.forEach( function(value, index, map) { });
const m1 = new Map([
  ['USD', 'United States Dollar'],
  ['INR', 'Indian Rupee'],
  ['EUR', 'Euro']
])

m1.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

forEach arguments for sets
set.forEach( function(value, sameValue, set) { });

const s1 = new Set(['USD', 'EUR', 'INR', 'INR']);

s1.forEach((value, _, set) => {
  console.log(`${value}`);
});
*/

/*
// .some() and .every() methods 
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30]

// Array.some(callback_func()) is used to return true based on the function that is given as a callback if only one element satisfies the function
console.log(movements.some(mov => mov > 0));

// Array.every(callback_func()) is used to return true based on the function that is given as a callback if only all elements of the array satisfy the function
*/

// Array filling methods
// method 1
// const a = new Array(5);
// a.fill(1, 3, 5);
// console.log(a);

// // method 2
// const s = Array.from({length: 5}, () => 2);
// console.log(s);

// // method 2 variant 
// //.from( {length: x}, (cur, i) => func );
// const d = Array.from({length: 5}, (_, i) => i + 2);
// console.log(d);

// // random dice rolls
// const f = Array.from({length: 10}, () => Math.ceil(Math.random()*6))
// console.log(f);


// ---------------------------------------- Numbers and Dates ---------------------------------------- //

 











