// Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

// Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm

// Do not use the built in Array.reverse() function!

// Examples:
// reverse([5, 4, 3, 2, 1]); _// [1, 2, 3, 4, 5]_
// reverse([]); _// []_
// var arr = [1, 2, 3];
// reverse(arr); _// [3, 2, 1]_
// arr; _// [3, 2, 1]_



//solution:
/* 
 * swap each value in the array starting from the 
 *  beginning and going to the middle. Note the middle element
 *  itself does not need to be swapped
 */
function reverse(arr) {
  // midpoint is length / 2, floored to account for odd lengths
  let middle = Math.floor(arr.length / 2);

  for (let i = 0; i < middle; i++) {
    let end = arr.length - 1;
    // make a temporary variable to store a value closer 
    //  to the beginning
    let temp = arr[i];
    // swap the value closer to the beginning with
    //  a value the same distance from the end
    arr[i] = arr[end - i];
    // swap the value closer to the end with
    //  the temporary variable
    arr[end - i] = temp;
  }
  return arr;
}