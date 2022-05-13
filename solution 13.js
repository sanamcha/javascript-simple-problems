function pop(arr) {
    if (arr.length === 0) {
      return; // default function return value is 'undefined'
    }
    // store the last value
    let finalVar = arr[arr.length - 1];
    // decreasing the length will automatically shrink the array
    arr.length = arr.length - 1;
  
    return finalVar;
  }
  