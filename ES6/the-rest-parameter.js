// Use the Rest Parameter with function Parameters

let howMany = (...args) => {
  return "You have passed " + args.length + " arguments";
}

console.log(
  howMany(0, 1, 2)
);