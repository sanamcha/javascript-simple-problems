// Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.
// Do not use the built in shift function!

// Examples:
// var arr = ["a","b","c"];
// shift(arr); // "a"
// arr; // ["b","c"]
// var emptyArr = [];
// shift(emptyArr); // undefined
// emptyArr.length; // 0


function shift(arr) {
    if (arr.length === 0) {
      return;
    }
    let firstVal = arr[0];
    // have to move up each element to account for missing first element
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;
    return firstVal;
  }
  