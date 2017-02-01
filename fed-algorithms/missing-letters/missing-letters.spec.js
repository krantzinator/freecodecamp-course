var Letters = require('./missing-letters');

describe('findMissing()', function() {
  var letters = new Letters();

  it('finds one missing letter in a sequence', function() {
    expect(letters.findMissing("abde")).toEqual("c");
  });

  it('returns `undefined` if all letters are present in the range', function() {
    expect(letters.findMissing("lmnop")).toEqual(undefined);
  });

  it('finds one missing letter in a long sequence', function() {
    expect(letters.findMissing("abcdeghijklm")).toEqual("f");
  });

  it('finds a missing letter where the missing letter is second-to-last', function() {
    expect(letters.findMissing("abce")).toEqual("d");
  });

});
