// lcm(a, b) = (a * b) / gcd(a, b)

var Multiples = function() {};

Multiples.prototype.smallestCommon = function(arr) {
  new_arr = Array.from(new Array(arr[1]), (x, i) => i + arr[0])
  var a = arr[0]
  var b = arr[1]
  var lcm = (a * b) / this.gcd([a, b]);

  return lcm;
};

Multiples.prototype.gcd = function(arr2) {
  var a = arr2[1]
  var b = arr2[0]

  while (b !== 0) {
    var remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

module.exports = Multiples;
