// Compare two arrays and return a new array with any items only found in
// one of the two given arrays, but not both.

// Second solution - finding a way to combine the index match functions

var DiffTwoArrays = function() {};

DiffTwoArrays.prototype.diffArray = function(arr1, arr2) {
  var newArr = [];
  var workingArr = arr1.concat(arr2);

  var x = workingArr.filter(function(i) {
    return (arr1.indexOf(i) === -1 || arr2.indexOf(i) === -1);
  });

  return newArr.concat(x);
};

module.exports = DiffTwoArrays;
