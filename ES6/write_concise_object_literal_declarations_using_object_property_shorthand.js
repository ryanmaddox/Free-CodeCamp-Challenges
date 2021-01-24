/** ES6: Write Concise Object Literal Declarations Using Object Property ShorthandPassed */

// Consider the following code:
const getMousePosition1 = (x, y) => ({
	x: x,
	y: y,
});

const getMousePosition2 = (x, y) => ({ x, y });

// getMousePosition 1 and 2 function, are simple functions that returns an object containing two properties.ES6 provides the syntatic sugar to eliminate the redundancy of having to write X: x. You can simply write x once, and it will be converted to x: x ( or something equivalent) under the hood.

// Notice the use of parenthesis on the body of the arrow function to return an object, this is used alot in react where everything you work with comes from an object.

// Challenge use regular function syntax
const createPerson = (name, age, gender) => {
	// Only change code below this line
	return {
		name,
		age,
		gender,
	};

	// Only change code above this line
};

// invoke function to create person
console.log(createPerson("diesel", 8, "male"), "regular function syntax");

// Challenge use arrow function syntax
const createPerson1 = (name, age, gender) => ({
	name,
	age,
	gender,
});
// invoke function
console.log(createPerson1("Ryan", 50, "male"), "regular arrow syntax");

// Challenge use shorthand arrow syntax
const createPerson2 = (name, age, gender) => ({ name, age, gender });
// invoke function
console.log(createPerson2("Ryan", 50, "male"), "shorthand syntax");
