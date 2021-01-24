/**
 * ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
 */

// In some cases, you can destructure the object in a function argument itself.
// Consider the code below:

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// Only change code below this line
// const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

const profileData = {
	name: "John Doe",
	age: 40,
	nationality: "spanish",
	location: {
		state: "CA",
		zip: 84107,
		city: "unknown",
	},
	emai: "johndoe@yahoo.com",
};

// console.log(profileData);

// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
//     console.log(name, age, nationality, location);
// }

// profileUpdate();

const profile = ({ name, age, nationality, location }) => {
	console.log(name, age, nationality, location);
};

profile(profileData);
