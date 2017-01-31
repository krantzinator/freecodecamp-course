var PigLatin = function() {};

PigLatin.prototype.translate = function(str) {
  var letter = str.charAt(0);
  var str1 = str.substr(1);
  var pig = "ay";

  if (!letter.match(/[aeiou]/)) {
    return str1 + letter + pig;
  } else {
    return str + "way";
  }
};

module.exports = PigLatin;
