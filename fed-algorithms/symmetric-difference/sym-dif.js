var SymmetricDifference = function() {};

SymmetricDifference.prototype.compute = function(args) {
  var argsArray = Array.prototype.slice.call(arguments);
  var args1 = argsArray[0];
  var args2 = argsArray[1];

  var newArray = args1.filter(function(num) {
    return args2.indexOf(num) === -1;
  });
  var newArray2 = args2.filter(function(num) {
    return args1.indexOf(num) === -1;
  });
  
  return newArray.concat(newArray2).sort();
};

module.exports = SymmetricDifference;
