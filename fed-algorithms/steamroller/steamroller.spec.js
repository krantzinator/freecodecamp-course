var Steamroller = require('./steamroller');

describe('flatten()', function() {
  var steamroller = new Steamroller();

  it('a one dimensional array returns itself', function() {
    expect(steamroller.flatten([1,2])).toEqual([1,2]);
  });

  it('a two dimensional array returns a one dimensional array', function() {
    expect(steamroller.flatten([[1,2]])).toEqual([1,2]);
  });

});
