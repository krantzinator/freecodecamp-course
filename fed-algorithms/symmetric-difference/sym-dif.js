var SymmetricDifference = function() {};

SymmetricDifference.prototype.compute = function(args) {
  var argsArray = Array.prototype.slice.call(arguments);
  var args1 = argsArray[0];
  var args2 = argsArray[1];

  function filterDupes(arr, secondArr) {
    return arr.filter(function(num) {
      return secondArr.indexOf(num) === -1;
    });
  }
  var newArray = filterDupes(args1, args2);
  var newArray2 = filterDupes(args2, args1);

  return newArray.concat(newArray2).sort();
};

module.exports = SymmetricDifference;
