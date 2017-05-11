// lcm(a, b) = (a * b) / gcd(a, b)

var Multiples = function() {};

Multiples.prototype.smallestCommon = function(arr) {
  new_arr = Array.from(new Array(arr[1]), (x, i) => i + arr[0])
  console.log(new_arr)
  var a = arr[0]
  var b = arr[1]
  var lcm = (a * b) / this.gcd(a, b);
  //
  // for (i = b; i > a; i--) {
  //   lcm = (i / this.gcd(i, i - 1)) * (i - 1)
  // }

  return lcm;
};

Multiples.prototype.gcd = function(b, a) {
  // Euclidean algorithm to find greatest common denominator
  while (b !== 0) {
    var remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

module.exports = Multiples;
