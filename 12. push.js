// Write a function called push which accepts two parameters, an array and any value.

// The function should add the value to the end of the array and then return the new length of the array.

// Do not use the built in Array.push() function!

// Examples:

// var arr = [1, 2, 3];
// push(arr, 10); _// 4_
// arr; _// [1, 2, 3, 10]_
// var secondArr = [5, 2, 1, 6];
// push(secondArr, 20); _// 5_
// arr; _// [5, 2, 1, 6, 20]_

function push(arr, value) {
    // remember JS arrays are dynamic (in fact, technically they are objects)
    //  so you can dynamically assign a new index at arr.length
    //   and the length automatically updates
    arr[arr.length] = value;
    return arr.length;
  }
  