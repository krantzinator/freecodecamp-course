var SearchAndReplace = function() {};

SearchAndReplace.prototype.myReplace = function(str, before, after) {
  var arr = str.split(" ");
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }

  arr.splice(arr.indexOf(before), 1, after);

  return arr.join(" ");
};

module.exports = SearchAndReplace;
