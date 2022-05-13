// 31
// Write a function called stringFromObject that generates a string from an object's key/value pairs.

// The format should be "key = value, key = value".

// Each key/value pair should be separated by a comma and space except for the last pair.

// Examples:
// stringFromObject({ a: 1, b: '2' }); 

// _// "a = 1, b = 2"_

// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }); 

// _// "name = Elie, job = Instructor, isCatOwner = false"_

// stringFromObject({}); 
// _// ""_

/**
 * Loop thru keys building a string with ' = ' between
 *  key and value and ', ' between each entry,
 *  then slice off the comma and space at the end
 */
function stringFromObject(obj) {
    let finalStr = '';
    for (let key in obj) {
      finalStr += key + ' = ' + obj[key] + ', ';
    }
    return finalStr.slice(0, -2);
  }
  

/**
 * This is a very advanced approach that you might see in production code.
 *  Get entries of an object (an array of arrays with [key, value]), then
 *  turn it into an array of strings like ['key = value', 'key = value'],
 *  then finally join the array on comma + space
 */
function stringFromObjectDeclarative(obj) {
    return Object.entries(obj)
      .map(pair => pair.join(' = '))
      .join(', ');
  }