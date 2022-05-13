// Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.
// This function should return the new length of the array.
// Do not use the built in Array.unshift() function!

// Examples:
// var arr = [1, 2, 3];
// unshift(arr, 0); _// 4_
// arr; _// [0, 1, 2, 3]_
// unshift([4, 5, 6], 10); _// 4_


function unshift(arr, val) {
    // starting from the end of the array, each item has to be
    //  moved up one to account for the new element at the beginning
    for (let i = arr.length; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr.length;
  }