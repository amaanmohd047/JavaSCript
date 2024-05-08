// Declaration
const uchiha = ["Obito", "Itachi", "Sasuke"];
console.log("1. " + uchiha);

// Use .push to add a new element in array
uchiha.push("Shisui");
console.log("2. " + uchiha);

// Use .unshift to add a new element in beginning of the array
uchiha.unshift("Madara");
console.log("3. " + uchiha);

// use .shift to remove the first element from the array
uchiha.shift();
console.log("4. " + uchiha);

// use .pop to remove the last element from the array
// uchiha.pop();
// also we can store that popped value in a variable
const popped = uchiha.pop();
console.log("5. " + popped);
console.log("6. " + uchiha);

// to know the index of an element
// it returns -1 for a non-existing element
console.log("7. " + uchiha.indexOf("Itachi"));

// .include returns boolean if the element exists or not
console.log("8. " + uchiha.includes("Obito"));
console.log("9. " + uchiha.includes("Madara"));
