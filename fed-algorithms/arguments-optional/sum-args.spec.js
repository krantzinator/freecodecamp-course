var SumArgs = require('./sum-args');

describe("addTogether()", function() {
  var sumArgs = new SumArgs();

  it('sums the two given arguments', function() {
      expect(sumArgs.addTogether(2, 3)).toEqual(5);
  });

  it('the function part works', function() {
      expect(sumArgs.addTogether(2)(3)).toEqual(5);
  });

});
