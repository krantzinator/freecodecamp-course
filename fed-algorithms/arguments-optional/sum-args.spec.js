var SumArgs = require('./sum-args');

describe("addTogether()", function() {
  var sumArgs = new SumArgs();

  it('sums the two given arguments', function() {
      expect(sumArgs.addTogether(2, 3)).toEqual(5);
  });

  it('the function part works', function() {
      expect(sumArgs.addTogether(2)(3)).toEqual(5);
  });

  it('returns undefined', function() {
      expect(sumArgs.addTogether("http://bit.ly/IqT6zt")).toEqual(undefined);
  });

  it('returns undefined when second argument is not a number', function() {
      expect(sumArgs.addTogether(2, "3")).toEqual(undefined);
  });

  it('returns undefined when second closure argument is not a number', function() {
      expect(sumArgs.addTogether(2)([3])).toEqual(undefined);
  });

});
