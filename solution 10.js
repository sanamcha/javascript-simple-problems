// Write a function called indexOf, which accepts an array and a number.

// The function should return the first index at which the value exists or -1 if the value is not found.

// Do not use the built in Array.indexOf() function!

// Examples:

// var arr = [5, 10, 15, 20];
// indexOf(arr, 20); _// 3_

// var arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); _// 1_

// var arr3 = [1, 2];
// indexOf(arr3, 10); _// -1_


function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }
  