var Steamroller = require('./steamroller');

describe('flatten()', function() {
  var steamroller = new Steamroller();

  it('a one dimensional array returns itself', function() {
    expect(steamroller.flatten([1,2])).toEqual([1,2]);
  });

  it('a two dimensional array returns a one dimensional array', function() {
    expect(steamroller.flatten([[1,2]])).toEqual([1,2]);
  });

  it('flattens an array of two two dimensional arrays', function() {
    expect(steamroller.flatten([[[1]], [[2]]])).toEqual([1,2]);
  });

  it('flattens arrays of varying dimensions', function() {
    expect(steamroller.flatten([1, [2], [3, [[4]]]])).toEqual([1,2,3,4]);
  });

  it('flattens empty arrays', function() {
    expect(steamroller.flatten([1, [], [3, [[4]]]])).toEqual([1,3,4]);
  });

  it('flattens objects in an array as its own index', function() {
    expect(steamroller.flatten([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });

});
