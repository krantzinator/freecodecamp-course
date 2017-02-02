/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

var Boo = function() {};

Boo.prototype.checkValue = function(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
};

module.exports = Boo;
