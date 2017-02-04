/*
Given a positive integer num, return the sum of all odd Fibonacci
numbers that are less than or equal to num.
*/

var Fibonacci = function() {};

// Fibonacci.prototype.findFibAtLoc = function(x, y = 0, z = 1) {
//   if (x <= 2) {
//     return y + z;
//   } else {
//     return this.findFibAtLoc(x - 1, z, y+z);
//   }
// };

Fibonacci.prototype.sumOddNums = function(num) {
  var x = 1;
  var result = 0;
//a more complex solution, as I wanted practice implementing a 'pure' Fibonacci
// function using tail recursion
  while (findFibAtLoc(x) <= num) {
    var fib = findFibAtLoc(x);
    if (num === 1) {
      result = 1;
    } else if (fib % 2 !== 0) {
      result += fib;
    }
    x += 1;
  }

  function findFibAtLoc(x, y = 0, z = 1) {
    if (x <= 2) {
      return y + z;
    } else {
      return findFibAtLoc(x - 1, z, y+z);
    }
  }

  return result;
};

module.exports = Fibonacci;
