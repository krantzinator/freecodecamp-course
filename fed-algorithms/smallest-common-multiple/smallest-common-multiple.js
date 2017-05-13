// lcm(a, b) = (a * b) / gcd(a, b)

var Multiples = function() {};

Multiples.prototype.smallestCommon = function(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  // set initial value of lcm to lcm of two highest numbers
  var lcm = (max / this.gcd(max, max - 1)) * (max - 1);

  // work backwards to lowest number to find overal lcm of range
  for (i = max - 1; i > min; i--) {
    if (lcm % (i-1) === 0){
      lcm = lcm;
    } else {
      lcm = (lcm / this.gcd(lcm, i - 1)) * (i - 1);
    }
  }

  return lcm;
};

Multiples.prototype.gcd = function(a, b) {
  // Euclidean algorithm to find greatest common denominator
  while (b !== 0) {
    var remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

module.exports = Multiples;
