var Drop = function() {};

Drop.prototype.elements = function(arr, func) {
  while (!func(arr[0]) && arr.length > 0) {
    arr.shift();
  }
  return arr;
};

module.exports = Drop;
