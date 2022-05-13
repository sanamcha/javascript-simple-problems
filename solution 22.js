

// 22
// Write a function called values, which accepts an object and returns an array of all of the values in the object.

// Do not use the built in Object.values() function!

// Examples:

// var obj = { a: 1, b: 2, c: 3 };
// values(obj); _// [1,2,3]_

// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); _// ["Matt", "Lane", true]_
// var obj3 = {};
// values(obj3); _// []_



function values(obj) {
    let valuesArr = [];
    for (let key in obj) {
      valuesArr.push(obj[key]);
    }
    return valuesArr;
  }
  