var Steamroller = function() {};

Steamroller.prototype.flatten = function(arr) {
  var newArr = [];

  function mapFn(item) {
    if (Array.isArray(item)) {
      for (i = 0; i < item.length; i++) {
        mapFn(item[i]);
      }
    } else {
      newArr.push(item);
    }
  }

  arr.forEach(mapFn);

  return newArr;
};

module.exports = Steamroller;
