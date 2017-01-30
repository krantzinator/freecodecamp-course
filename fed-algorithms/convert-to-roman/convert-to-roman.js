//Convert the given number into a roman numeral.

var ConvertToRoman = function() {};

ConvertToRoman.prototype.convertToRoman = function(num) {
  var result = '';

  var obj = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };
  var keys = Object.keys(obj).reverse();

  for (i = 0; i < keys.length; i++) {
    sort(num);
  }

  function sort(input) {
    var key = keys[i];
    if (num - key >= 0) {
      result += obj[key];
      num -= key;
      sort(num);
    }
  }

  return result;
};

module.exports = ConvertToRoman;
