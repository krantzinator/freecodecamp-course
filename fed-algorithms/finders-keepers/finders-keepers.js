var Finders = function() {};

Finders.prototype.findElement = function(arr, func) {
  var num = arr.filter(func);
  return num[0];
};

module.exports = Finders;
