/** Basic JavaScript: Testing Objects for Properties */

// To check if the property of a given object exists or not we use .hasOwnProperty(propname) method.

// If the object has the given propertyname it will return true, flase if it does not exists.

// Example: 
// let myObj = {
//     top: 'hat',
//     bottom: 'pants'
// };

// let result = myObj.hasOwnProperty('top');

// console.log(result);

obj = {
    gift: 'pony',
    pet: 'kitten',
    bed: 'sleigh'
}

console.log(obj.pet);