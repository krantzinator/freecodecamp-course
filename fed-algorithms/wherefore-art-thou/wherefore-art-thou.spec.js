var FindMatchingPair = require('./wherefore-art-thou');

describe('findMatch()', function() {
  var match = new FindMatchingPair();

  it('correctly pulls out the singular key-value pair match', function() {
    expect(
      match.whatIsInAName([{ first: "Romeo", last: "Montague" }], { last: "Montague" })
    ).toEqual([{ first: "Romeo", last: "Montague" }]);
  });

  it('correctly pulls out the key-value pair from a list of multiple objects', function() {
    expect(
      match.whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
    ).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });

  it('correctly pulls out multiple key-value pairs from a list of multiple objects', function() {
    expect(
      match.whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
    ).toEqual([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
  });

  it('correctly pulls out multiple key-value pairs from a list of multiple objects', function() {
    expect(
      match.whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
    ).toEqual([{ "a": 1, "b": 2, "c": 2 }]);
  });




});
