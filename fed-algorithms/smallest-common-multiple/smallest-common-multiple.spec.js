var Multiples = require('./smallest-common-multiple');

describe('smallestCommon()', function() {
  var multiples = new Multiples();

  it('returns a number', function() {
    expect(typeof multiples.smallestCommon([1, 5])).toEqual("number");
  });

  it('returns 2 as the LCM for range 1..2', function() {
    expect(multiples.smallestCommon([1, 2])).toEqual(2);
  });

  it('returns 2 as the GCD for array [4, 6]', function() {
    expect(multiples.gcd(4, 6)).toEqual(2);
  });

  it('returns 6 as the LCM for range 1..3', function() {
    expect(multiples.smallestCommon([1, 3])).toEqual(6);
  });

});
