/** ES6: Use Destructuring Assignment to Assign Variables from Objects */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: hihgToday, tomorrow: hihgTomorrow } = HIGH_TEMPERATURES;

console.log(hihgToday, hihgTomorrow);


// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.