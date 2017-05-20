var SymmetricDifference = require('./sym-dif');

describe('compute()', function() {
  var symmetricDifference = new SymmetricDifference();

  it('returns symmetric difference when given two arrays', function() {
      expect(symmetricDifference.compute([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });

  it('returns 3 elements', function() {
      expect(symmetricDifference.compute([1, 2, 3], [5, 2, 1, 4]).length).toEqual(3);
  });

  it('returns symmetric difference when given three arrays', function() {
      expect(symmetricDifference.compute([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
  });

  it('returns symmetric difference when number appears in all three arrays', function() {
      expect(symmetricDifference.compute([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5]);
  });

  it('returns symmetric difference when there are four arrays', function() {
      expect(symmetricDifference.compute([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual([2, 3, 4, 6, 7]);
  });

  it('returns symmetric difference when there are six arrays', function() {
      expect(symmetricDifference.compute([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
      .toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });


});
