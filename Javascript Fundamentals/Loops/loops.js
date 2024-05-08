// ------------------------------FOR LOOP-----------------------------------//

// To print sum of 1 to n numbers
function factorial(n) { 
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}
// const n = parseInt(prompt("enter the number for the factorial:"));

console.log(`1. ${factorial(5)}`);

const arr1 = [
  'Amaan', 
  'Mohammed',
  'amaanmohd047@gmail.com',
  19,
  ['Python', 'C', 'SQLite3', 'Flask', 'HTML/CSS/JS', 'Bootstrap']
];

// to iterate through every element in the array

for(let i = 0; i < arr1.length; i++) {
  console.log(`${i + 2}. ${arr1[i]}`);
}

// continue and break 
// to skip a certain step use continue 
// to break a loop at a certain step use break

// Looping Backward
for(let i = arr1.length - 1; i >= 0; i--) {
  console.log(arr1[i]);
}

// ------------------------------WHILE LOOP-----------------------------------//

// const arr2 = [
//   'apple',
//   'banana',
//   23,
//   function total() {
//     return '3 apples and 2 bananas'
//   },
//   ['Me', 'I']
// ];

// to print table of two
console.log("-:With For Loop:-");
for( let i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}

console.log("-:With While Loop:-");
let i = 1;
while (i <= 10) {
  console.log(`2 x ${i} = ${2 * i}`);
  i++;
}

// Another Example:: Dice Simulator

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}.`)
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('You rolled a 6.')
}

// =========================================END========================================= //