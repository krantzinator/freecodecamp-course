var FindMatchingPair = function () {};

FindMatchingPair.prototype.whatIsInAName = function(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);

  arr = collection.filter(function(obj){
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  // Only change code above this line
  return arr;
};

module.exports = FindMatchingPair;

/*
I started with this, knowing I need to cycle through the `collection` and
then the `source`, comparing each one in sequence. I couldn't figure out how
to make sure both of the `keys` I was pulling were present in the `collection`

  var keys = Object.keys(source);
  for (i = 0; i < collection.length; i++) {
    var obj = collection[i];
    for (j = 0; j < keys.length; j++) {
      var key = keys[j];
      if (obj.hasOwnProperty(key) && obj[key] === source[key]) {
        arr.push(obj);
      }
    }
  }

I started playing with the `.map` and `.filter` functions (below), but I still
couldn't quite get all the `keys` to compare across a single `collection` obj

  var keys = Object.keys(source);
  collection.map(function(obj) {
    for (i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (obj.hasOwnProperty(key) && source[key] === obj[key]) {
        arr.push( obj );
      }
    }
  });

Finally, I found out JavaScript has a `.every` function. Fantastic. That led to
the final solution (top).
*/
