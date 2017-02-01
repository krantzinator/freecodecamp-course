/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

var Letters = function() {};

Letters.prototype.findMissing = function(str) {
  var result = "";

  for (i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 != str.charCodeAt(i + 1)) {
      result = String.fromCharCode(str.charCodeAt(i) + 1);
      return result;
    } else {
    // In terms of best practices, is it better to make sure an `else` statement
    // is part of the `if` statement, or to avoid reasigning the same value to
    // a variable by moving the `result = undefined` to the end of the for loop?
      result = undefined;
    }
  }
  return result;
};

module.exports = Letters;
