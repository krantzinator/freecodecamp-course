var Drop = require('./drop-elements');

describe('elements()', function() {
  var drop = new Drop();

  it('returns original array if n is equal to the number at index 0', function() {
    expect(drop.elements([1,2,3], function(n) {return n === 1;})).toEqual([1, 2, 3]);
  });

  it('returns rest of the array after the index of the item that equals n', function() {
    expect(drop.elements([1,2,3,4], function(n) {return n >= 3;})).toEqual([3, 4]);
  });

  it('works even if array is not in sequential order', function() {
    expect(drop.elements([0, 1, 0, 1], function(n) {return n === 1;})).toEqual([1,0,1]);
  });

  it('returns an empty array if function never resolves to true', function() {
    expect(drop.elements([1, 2, 3, 4], function(n) {return n > 5;})).toEqual([]);
  });

});
