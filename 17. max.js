// Write a function called max, which accepts an array and returns the highest value.

// Do not use the built-in Math.max() function!

// Examples:

// max([5, 1, 4, 7, 1, 2]); _// 7_
// max([3, 4, 12, 1, 8]); _// 12_
// max([-1, 6, 3, 2.2, -10, -4]); _// 6_

function max(arr) {
    // we can use the first element as the default 'maximum'
    let maximum = arr[0];
    // then if we encounter a larger element in the rest of the array,
    //   replace the value. Note we can start our loop at index 1
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
      }
    }
    return maximum;
  }
  