// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method - the tests will fail if you do!

// Examples:

// repeat('Matt', 3) // 'MattMattMatt'
// repeat('Elie', 2) // 'ElieElie'
// repeat('Michael', 0) // ''            


function repeat(str, num) {
    let newStr = ""; // string we will build up
  
    for (let i = 0; i < num; i++) {
      // note that this creates a new string every iteration of the loop
      //  because JavaScript strings are immutable
      newStr += str;
    }
  
    return newStr;
  }