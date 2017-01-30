var DiffTwoArrays = require('./diff-two-arrays');

describe('diff()', function() {
  var diff = new DiffTwoArrays();

  it('finds the number in first given array that is not in second given array', function() {
    expect(diff.diffArray([1,2,3], [1,2])).toEqual([3]);
  });

  it('finds the number in second given array that is not in first given array', function() {
    expect(diff.diffArray([1,2], [1,2,3])).toEqual([3]);
  });

  it('finds multiple numbers not in both arrays', function() {
    expect(diff.diffArray([1,2,4], [1,2,3])).toEqual([4,3]);
  });

  it('finds multiple numbers in each array that are not in both arrays', function() {
    expect(diff.diffArray([1,2,4,5], [1,2,3,6])).toEqual([4,5,3,6]);
  });

});
