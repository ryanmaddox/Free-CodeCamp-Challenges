/** Write Concise Declarative Functions with ES6 */

// Definging a function on an abject in ES5 syntax
// const person = {
// 	name: "John Doe",
// 	sayHello: function () {
// 		return `Hello My name is ${this.name}.`;
// 	},
// };

// console.log(person.sayHello(), "ES5 syntax");

// // Defining a function on an object in ES6 syntax
// const person1 = {
// 	name: "Taylor",
// 	sayHello() {
// 		return `Hello My name is ${this.name}.`;
// 	},
// };

// console.log(person1.sayHello(), "ES6 syntax");

// Challenge
const bicycle = {
	gear: 2,
	setGear(newGear) {
		this.gear = newGear;
	},
};

bicycle.setGear(3);

console.log(bicycle.gear);
