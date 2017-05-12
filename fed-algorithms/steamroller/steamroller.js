var Steamroller = function() {};

Steamroller.prototype.flatten = function(arr) {
  result = Array.from(arr, x => mapFn(x));

//look at using Function.prototype.apply() instead of below function
  function mapFn(item) {
    if (Array.isArray(item)) {
      for (i = 0; i < item.length; i++) {
        mapFn(item[i]);
      }
    } else {
      return item;
    }
  }

  return result;
};

module.exports = Steamroller;
