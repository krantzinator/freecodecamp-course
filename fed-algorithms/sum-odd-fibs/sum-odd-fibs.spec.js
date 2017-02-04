var Fibonacci = require('./sum-odd-fibs');

describe('sumOddNums()', function() {
  var fibonacci = new Fibonacci();

  // it('returns Fibonacci sequence', function() {
  //     expect(fibonacci.findFibAtLoc(47)).toEqual(2971215073);
  // });

  it('returns a number', function() {
      expect(fibonacci.sumOddNums(1)).toEqual(1);
  });

  it('returns 5 when 4 is input', function() {
      expect(fibonacci.sumOddNums(4)).toEqual(5);
  });

  it('returns a number', function() {
      expect(fibonacci.sumOddNums(1000)).toEqual(1785);
  });

  it('returns a number', function() {
      expect(fibonacci.sumOddNums(4000000)).toEqual(4613732);
  });

});
