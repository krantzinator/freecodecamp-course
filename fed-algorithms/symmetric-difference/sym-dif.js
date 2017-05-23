var SymmetricDifference = function() {};

SymmetricDifference.prototype.compute = function(args) {
  var argsArray = Array.prototype.slice.call(arguments);
  var args1 = argsArray[0];
  var args2 = argsArray[1];

  function filterDupes(arr, secondArr) {
    return arr.filter(function(num) {
      // console.log(secondArr, num);
      return secondArr.indexOf(num) === -1;
    });
  }

  var bestArray = argsArray.reduce(function(acc, val) {
    //console.log("acc = ", acc);
    return filterDupes(acc, val).concat(filterDupes(val, acc));
  },[]);

  var betterArray = bestArray.filter(function(num, index) {
    return bestArray.indexOf(num) === index;
  });

  return betterArray.sort();

};

module.exports = SymmetricDifference;

// example output from console.log of first test
// [1, 2, 3], [5, 2, 1, 4]

// acc =  []
// [] 1
// [] 2
// [] 3
// acc =  [ 1, 2, 3 ]
// [ 5, 2, 1, 4 ] 1
// [ 5, 2, 1, 4 ] 2
// [ 5, 2, 1, 4 ] 3
// [ 1, 2, 3 ] 5
// [ 1, 2, 3 ] 2
// [ 1, 2, 3 ] 1
// [ 1, 2, 3 ] 4
