'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1
// for (const i of game.scored) {
//   console.log(i);
// }

// const entries = Object.entries(game.odds);

// // 2
// let sum = 0;
// for (const i of entries) {
//   sum += i[1];
// }
// console.log(sum / entries.length);

// // 3
// for (const i of entries) {
//   const team = game[i[0]];
//   const value = team ?? 'draw';
//   console.log(`Odd of Victory ${value}: ${i[1]}.`);
// }

// // Bonus

// const rest = new Map();

// rest.set('name', 'Amaan da Dhaba');
// console.log(rest);

// // rest.delete('name');
// // console.log(rest);
// rest.set(2, 'adfsfda');

// console.log(rest.size);

// Coding Challenge 3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Creating the array of events in the map
// const events = [...new Set(gameEvents.values())];

// // 2. deleting 64
// gameEvents.delete(64);

// // 3. Calculating average event time
// console.log(90 / gameEvents.size);

// // 4.
// for (let [key, value] of gameEvents.entries()) {
//   const str =
//     key <= 45
//       ? `[FIRST HALF] ${key}: ${value}.`
//       : `[SECOND HALF] ${key}: ${value}.`;
//   console.log(str);
// }

/////////////////////// STRING ////////////////////////

// const airline = 'Indigo Flight India';
// const plane = 'A230';

// for (let letter of airline) {
//   console.log(letter);
// }

// console.log(airline.indexOf('i'));
// console.log(airline.lastIndexOf('i'));
// console.log(airline.indexOf('India'));

// // String Slicing
// console.log(airline.slice(airline.indexOf('o'), airline.lastIndexOf('I')));
// console.log((airline.slice(airline.indexOf('o'), airline.lastIndexOf('I'))).length);

// // End Value is not included in the substring

// const checkSeat = (seat) => {
//   const c = seat.slice(-1);const email = 'hello@amaan.in';
// const login = '   HeLLo@AMaan.IN  \n';

// const loginLower = login.toLowerCase();
// const loginTrimmed = loginLower.trim();

// if(email == loginTrimmed) {
//   console.log("Successfully Logged In!");
// } else {
//   console.log("Wrong Email!");
// }

//   const str = (c == "B" || c == "E") ? 'Its A Middle Seat' : 'Its not a Middle Seat';
//   console.log(str);
// }

// checkSeat("11A");
// checkSeat("1B");
// checkSeat("23C");
// checkSeat("13E");

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const nam = 'aMaAn';
// const passenger = nam[0].toUpperCase() + nam.slice(1).toLowerCase();

// console.log(passenger);

// const email = 'hello@amaan.in';
// const login = '   HeLLo@AMaan.IN  \n';

// const loginLower = login.toLowerCase();
// const loginTrimmed = loginLower.trim();

// if(email === loginTrimmed) {
//   console.log("Successfully Logged In!");
// } else {
//   console.log("Wrong Email!");
// }

// const announcement = 'All hostlers must evacuate the HJB Hall by noon. I repeat evacuate by noon.';

// console.log(announcement);

// console.log("Edited: " + announcement.replaceAll('noon', 'evening').replace('HJB', 'Kautilya'));

// // // Booleans
// const text = 'Apun the Great!';

// console.log(text.includes('the'));
// console.log(text.startsWith('Apun'));
// console.log(text.endsWith("!"));

// const str = 'searching+for+results';
// const [...words] = str.split('+');

// console.log(...words);

// const capitalize = function (name) {
//   const arr = name.split(" ");
//   const names = [];
  
//   for (let i of arr) {
//     names.push(i[0].toUpperCase() + i.slice(1));
//   }
//   console.log(names.join(" "));
// }

// const passenger = 'sarah jessica singh parker'
// capitalize(passenger);
// capitalize('mohammed amaan ansari');

// CODING CHALLENGE #4

// Data needed for string exercise 
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// /* Output: 
//   🔴 Delayed Departure from FAO to TXL (11h25)
//                 Arival from BRU to FAO (11h45)
//     🔴 Delayed Arrival from HEL to FAO (12h05)
//              Departure from FAO to LIS (12h30)  
// */
// const flightsArr = flights.split("+");

// for(let i of flightsArr) {
//   const flight = i.split(';');
//   const first = flight[0].split("_");
//   first.shift();
//   const from = flight[1].slice(0, 3).toUpperCase();
//   const to = flight[2].slice(0, 3).toUpperCase();
//   const [hour, min] = flight[3].split(":");
//   const time = flight[3].replace(':', 'h');

//   if (first[0].toLowerCase() == "delayed") {
//     const str = `🔴 ${first[0]} ${first[1]} from ${from} to ${to} (${hour}h${min})`;
//     console.log(str.padStart(45));
//   } else {
//     const str = `${first[0]} from ${from} to ${to} (${time})`;
//     console.log(str.padStart(45));
//   }
// } 