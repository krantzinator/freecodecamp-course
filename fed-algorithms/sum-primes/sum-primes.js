/*
This was intense. I finally looked up some solutions + hints, and was angered when the
suggested solution I found on FCC's forms said "This problem is hard if you have to
create your own code to check for primes." That is the actual challenge here! Summing
a list is not a challenge. I kept going with figuring out a solution to finding primes.
The obvious way is to divide each number by every preceding number, and if anything
except for 1 give you a modulo of 0, then it's not a prime. This is very inefficient.
I first thought to have a "rejected" list to use as a way to filter out non-primes.
Then I looked up some math tricks behind finding primes, and after learning more about
{ continue } and { break } functionality, I searched some more and found this
Erasthenes thing which was similar to what I was trying to achieve with my
"rejected" list.
I learned that "<<" has to do with binary values and shifting those.
I re-learned that JavaScript does not have a nice range() function like Python does.
I learned that you can have an empty array and set the values of select indices
to true or false. Mind blown!
*/

var Primes = function() {};

Primes.prototype.sumAllPrimes = function(sumToNum) {
  // create new array with indices numbered up to the given number
  // default values of false; will change to true if prime
  var primes = new Array(sumToNum + 1).fill(false);
  var rejects = [];

  // start at 2 since 0 and 1 are not primes
  for (i = 2; i <= sumToNum; i++) {
    // if not in `rejects` array, is a prime
    if (!rejects[i]) {
      primes[i] = true;
      // if it's a prime, cycle through rest of primes array indices to set values in
      // `rejects` array to True if an index/value is evenly divisible by the current prime
      for (j = i+1; j <= sumToNum; j++) {
        if (j % i === 0) { rejects[j] = true;}
      }
    }
  }
  console.log(primes);

  var count = 0;
  primes.forEach(function(val, index) {
    if (val) {
      count += index;
    }
  });

  return count;
};

module.exports = Primes;
