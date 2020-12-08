function Bird(name ) {
    this.name = name; // own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird('Donald'); // create instance of Bird assing it to duck

// create an own property array
let ownProps = [];
// create a prototype property array
let prototypeProps = [];

// iterate over properties

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property) // if it has the property it pushes it to the array ownProps
    } else {
        prototypeProps.push(property) // if false it pushes property to the array prototypeProp 
    }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

/**
 * Object.prototype.hasOwnProperty()
 * syntax:
 *  obj.hasOwnProperty(prop)
 * 
 * Parameters:
 * prop - The string name or Symbol to be tested
 * 
 * Return value:
 * a Boolean indicating whether or not the object has the specified property as own property
 * 
 * The hasOwnProperty() method returns a boolean  true if it does have the property or false if it doesn't have the property 
 */