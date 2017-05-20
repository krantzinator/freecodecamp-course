var SymmetricDifference = function() {};

SymmetricDifference.prototype.compute = function(args) {
  var argsArray = Array.prototype.slice.call(arguments);
  var args1 = argsArray[0];
  var args2 = argsArray[1];

  function filterDupes(arr, secondArr) {
    return arr.filter(function(num) {
      // console.log(num, secondArr);
      return secondArr.indexOf(num) === -1;
    });
  }

  var bestArray = argsArray.reduce(function(acc, val) {
    // console.log("acc = ", acc);
    return filterDupes(acc, val).concat(filterDupes(val, acc));
  },[]);

  var betterArray = bestArray.filter(function(num, index) {
    return bestArray.indexOf(num) === index;
  });

  return betterArray.sort();

};

module.exports = SymmetricDifference;
