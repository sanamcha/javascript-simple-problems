// Implement a function called multiples that accepts two numbers: x and n.

// The function should return the first n multiples of the number x.

// Assume that x is a positive integer.

// Examples:

// multiples(3, 4) // [3, 6, 9, 12]
// multiples(3, 4) // [3, 6, 9, 12]
// multiples(2, 5) // [2, 4, 6, 8, 10]


function pluck(arr, key) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i][key]);
    }
    return newArr;
  }
  