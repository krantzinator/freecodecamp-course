var SymmetricDifference = require('./sym-dif');

describe('compute()', function() {
  var symmetricDifference = new SymmetricDifference();

  it('returns symmetric difference when given two arrays', function() {
      expect(symmetricDifference.compute([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });

  it('returns 3 elements', function() {
      expect(symmetricDifference.compute([1, 2, 3], [5, 2, 1, 4]).length).toEqual(3);
  });

  // it('returns symmetric difference when given two arrays', function() {
  //     expect(symmetricDifference.compute([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
  // });

});
