/** Example: */
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// call function
let result = sum([2, 3, 4], 1);

console.log(result);