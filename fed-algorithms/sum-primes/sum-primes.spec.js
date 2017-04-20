var Primes = require('./sum-primes');

describe('sumAllPrimes()', function() {
  var primes = new Primes();

  it('returns a number', function() {
    expect(typeof primes.sumAllPrimes(10)).toEqual("number");
  });

  it('sums the primes less than or equal to a given number', function() {
    expect(primes.sumAllPrimes(10)).toEqual(17);
  });

});
