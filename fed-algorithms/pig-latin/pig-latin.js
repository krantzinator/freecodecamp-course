var PigLatin = function() {};

PigLatin.prototype.translate = function(str) {
  var letter = str.charAt(0);
  var str1 = str.substr(1);
  var pig = "ay";

  if (!letter.match(/[aeiou]/)) {
    if (str.charAt(1).match(/[aeiou]/)) {
      return str1 + letter + pig;
    } else {
      return str.substr(2) + str.substr(0,2) + pig;
    }
  } else {
    return str + "way";
  }
};

module.exports = PigLatin;
