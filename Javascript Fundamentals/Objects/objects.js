// Declaration
const amaanObject = {
  firstName: 'Mohammed Amaan',
  lastName: 'Ansari',
  age: 2022 - 2002,
  job: 'Nalla',
  favorites: ["Naruto", 'Itachi', 'Eren', 'Alphonse']
};

// to call a value
console.log("1. " + amaanObject.firstName);
console.log("2. " + amaanObject.lastName);
console.log("3. " + amaanObject['age']);
console.log("4. " + amaanObject["job"]);
console.log("5. " + amaanObject.favorites);

// to change value for a given key

amaanObject["age"] = 19;
amaanObject.favorites.push("Jon Snow");

console.log(amaanObject)

// to add a new key:value pair

amaanObject.location = 'India';
amaanObject['insta_id'] = 'amaanmohd_047'
console.log("6. " + amaanObject.location)
console.log('7. ' + amaanObject['insta_id'])

//////////////////// OBJECT METHODS //////////////////
const currentYear = parseInt(prompt("Enter the year:"));

naruto = {
  firstName: "Naruto",
  lastName: 'Uzumaki',
  birthyear: 1945,
  birthday: 'Sunday, October 10',
  job: 'Hokage',
  mentors: ['Iruka', 'Kakashi', 'Jiraiya', 'Killer B'],
  calcAge: function (currentYear) {
    this.age = currentYear - this.birthyear;
    return this.age;
  }
}

console.log(`${naruto.firstName} ${naruto.lastName} is the seventh ${naruto.job} of Konohagakure. He was born on ${naruto.birthday}, ${naruto.birthyear}. He is ${naruto.calcAge(currentYear)} years old. He was mentored by ${naruto.mentors}.`)

