/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

var SpinalCase = function() {};

SpinalCase.prototype.convertTo = function(str) {
  function addHyphenToUpper(match, offset, string) {
    return (offset ? '-' : '') + match;
  }
// first add a hypen before all capital letters, then replace whitespace and
// underscores with a hypen, then replace any double-hypens with a single hyphen
// and make the string lower case
  var newstr = str.replace(/[A-Z]/g, addHyphenToUpper).replace(/[\s_]/g, "-"
  ).replace(/-{2}/g, "-").toLowerCase();

  return newstr;
};

module.exports = SpinalCase;
