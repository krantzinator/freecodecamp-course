// Compare two arrays and return a new array with any items only found in
// one of the two given arrays, but not both.

// First solution

var DiffTwoArrays = function() {};

DiffTwoArrays.prototype.diffArray = function(arr1, arr2) {
  var newArr = [];

  function isMatchFirst(i) {
    return arr2.indexOf(i) === -1;
  }
  function isMatchSecond(i) {
    return arr1.indexOf(i) === -1;
  }
  var x = arr1.filter(isMatchFirst);
  var y = arr2.filter(isMatchSecond);

  newArr = y.concat(x);
  return newArr;
};

module.exports = DiffTwoArrays;
