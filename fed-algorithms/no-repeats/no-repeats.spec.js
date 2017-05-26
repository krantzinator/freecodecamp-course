var NoRepeats = require('./no-repeats');

describe('update()', function(){
  var noRepeats = new NoRepeats();

  it('returns an array', function() {
    expect(noRepeats.permutations('aab')).toEqual(2);
  });

});

// permAlone("aab") should return a number.
// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.
