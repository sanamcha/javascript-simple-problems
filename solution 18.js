// Write a function called min, which accepts an array of numbers and returns the lowest value.

// Do note use the built-in Math.min() function!

// Examples:

// min([5, 1, 4, 7, 1, 2]); _// 1_
// min([-1, 6, 3, 2.2, -10, -4]); _// -10_

function min(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
    return lowest;
  }
  