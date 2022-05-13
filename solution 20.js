// Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.

// Examples:

// squareEvenNumbers([1, 2, 3, 4, 5]); _// 20_
// squareEvenNumbers([1, 3, 5, 7]); _// 0_
// squareEvenNumbers([5, 6, 7]); _// 36_


function squareEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i] ** 2;
      }
    }
    return sum;
  }