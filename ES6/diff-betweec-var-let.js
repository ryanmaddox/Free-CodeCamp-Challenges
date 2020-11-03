// var myConcat = function (arr1, arr2) {
//   "use strict";
//   return arr1.concat(arr2);
// };

// concat() method is used to merge two or more arrays. this method does not change existing arrays, returns new array.

// Syntax:
// const new_array = old_array.concat([value1], [value2])



const myConcat2 = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat2([1, 2], [3, 4, 5]));