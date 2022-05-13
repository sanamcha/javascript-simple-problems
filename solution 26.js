// Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.

// Examples:

// generatePairs(3) // `[ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]`
// generatePairs(3) // `[ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]`
// generatePairs(2) // `[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]`
// generatePairs(2) // `[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]`
// generatePairs(1) // `[ [0, 0], [0, 1], [1,1]]`
// generatePairs(1) // `[ [0, 0], [0, 1], [1,1]]`
// generatePairs(0) // `[ [0, 0]]`



function generatePairs(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        result.push([i, j]);
      }
    }
    return result;
  }