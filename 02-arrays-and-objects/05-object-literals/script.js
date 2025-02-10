// let x;
// const details = {
//   name: "faridat",
//   age: 22,
//   address: {
//     street: "LargestContentfulPaint",
//     house: 40,
//     state: "abuja",
//   },
//   hobbies: ["singing", "cooking", "reserching"],
// };
// // x = details.name;
// x = details.address.state;
// x = details.hobbies[0];
// details.name = "muhammed";
// console.log(details);
//mine
let x;

// Creating an object
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

// Accessing object properties
x = person.name; // Dot notation
x = person["age"]; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = "Jane Doe";
person["isAdmin"] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  "first name": "Brad",
  "last name": "Traversy",
};

x = person2["first name"];

console.log(x);
