var Sorted = require('./sorted-union');

describe('uniteUnique()', function() {
  var sorted = new Sorted();

  it('returns one single array from two arrays', function() {
    expect(sorted.uniteUnique([1, 3, 2], [5, 4])).toEqual([1, 3, 2, 5, 4]);
  });

  it('all values included in original order but with no duplicates', function() {
    expect(sorted.uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
  });

  it('includs sub-sub-arrays as sub-arrays in final array', function() {
    expect(sorted.uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);
  });

  it('more tests', function() {
    expect(sorted.uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });

  it('more tests', function() {
    expect(sorted.uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).
    toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
  });

  it('throws an error for fewer than 2 arrays', function() {
    expect(function() {
      sorted.uniteUnique();
    }).toThrow(new Error('Must enter at least two arrays'));
  });

});
