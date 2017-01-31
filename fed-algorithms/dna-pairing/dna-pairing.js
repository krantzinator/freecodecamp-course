var DNA = function() {};

DNA.prototype.pairElement = function(str) {
  var obj = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };

  var arr = str.split("").map(function(item) {
    return [item, obj[item]];
  });

  return arr;
};

module.exports = DNA;
