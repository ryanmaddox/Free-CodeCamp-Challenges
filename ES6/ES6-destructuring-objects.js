// Destructuring assingment is syntax in ES6, for neatly assigning values taken directly from an object.

// This is how it is done in ES5
//const user = { name: 'John Doe', age: 34 };

//const name = user.name; // name = 'John Doe'
//const age = user.age; // age = 34

// here's the same thing done in ES6 with destructureing syntax

//const { name, age } = user;

//console.log(user);

// name = 'John Doe', age = 34
// Her the name and age variables will be created and assigned the values of their respective values from the user object.

// The challenge
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today, tomorrow);