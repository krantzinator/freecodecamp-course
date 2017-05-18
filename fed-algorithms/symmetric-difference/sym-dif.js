var SymmetricDifference = function() {};

SymmetricDifference.prototype.compute = function(args) {
  var argsArray = Array.prototype.slice.call(arguments);
  args1 = argsArray[0];
  args2 = argsArray[1];
  
  var newArray = args1.filter(function(x) {
    return !args2.includes(x);
  });
  var secondNewArray = args2.filter(function(x) {
    return !args1.includes(x);
  });
  // newArray.push(args2.filter(notPresent));

  return newArray.concat(secondNewArray).sort();
};

module.exports = SymmetricDifference;
