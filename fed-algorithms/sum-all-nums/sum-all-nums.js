// It was recommended we use the `.reduce` function, so I did
// However, since I needed to use a loop anyway to create an array that could be reduced,
// I don't see how this is a more readable or efficient solution than using a loop on
// the Min and Max values from the initial input

var SumAllNums = function() {};

SumAllNums.prototype.sumArrayRange = function(arr) {
  var a = arr[0];
  var b = arr[1];
// declare vars of start and end values to sum the range of, empty array to build
  var max = Math.max(a, b);
  var min = Math.min(a, b);
  var new_array = [];
// build array of range
  do {
    new_array.push(min);
    min += 1;
  } while (min < max);
  new_array.push(max);
// reduce array to sum of all elements
  var sum = new_array.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
};

module.exports = SumAllNums;
