// Write a function called swapKeyAndValue, which accepts an object and a key.

// The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

// Examples:

// var instructor = { name: 'Elie', job: 'Instructor' };

// swapKeyAndValue(instructor, 'name');
// _// {Elie: 'name', job: "Instructor"}_




function swapKeyAndValue(obj, swapKey) {
    let newObj = {};
  
    // loop through old object
    for (let key in obj) {
      if (key === swapKey) {
        // the one key needs to be swapped with its value
        newObj[obj[key]] = key;
      } else {
        // the other keys and values just need to be copied over
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
  