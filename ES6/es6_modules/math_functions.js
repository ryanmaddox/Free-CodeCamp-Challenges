/** ES6: Use export to Share a Code Block */

// export const add = (x, y) => {
//   return x + y;
// }

// The above is a way to export a single function


// const add = (x, y) => {
//   return x + y;
// }

// export { add };

// you can use the above code as a way to export both single and multiple elements of the file.

// Multiple elements in the file.
// const add = (x, y) => {
//   return x + y;
// }

// const sub = (x, y) => {
//   return x - y;
// }

// export { add, sub };


// To import everything from a file and it's content you use:
// import * as myMathModule from './math_functions.js';

// the above snippet will create an object called myMathModule. this is just a variable name you can name it anything you would like.
// Here is how you would use the function that were imported:
// myMathModule.add(2,3);
// myMathModule.sub(5,3);