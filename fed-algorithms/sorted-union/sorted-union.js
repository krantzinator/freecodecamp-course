/*
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.
*/

var Sorted = function() {};

Sorted.prototype.uniteUnique = function(arrs) {
  if (arguments.length <= 1) {
    throw new Error('Must enter at least two arrays');
  }

  var args = Array.prototype.slice.call(arguments);

  var arr = args.reduce(function(a, b) {
      return a.concat(b.filter(function(x){
//Where in the code would I include the polyfill for `.includes`?
        if (!a.includes(x)) {
          return x;
        }
      }));
    }, []);

  return arr;
};

/*
I think the polyfill goes here, since it's defining a new prototype. I'll
continue to research this. But would I need to put it under a new Sorted
prototype?
*/
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        // NOTE: === provides the correct "SameValueZero" comparison needed here.
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

module.exports = Sorted;
