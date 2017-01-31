var SearchAndReplace = require('./search-replace');

describe('myReplace()', function() {
  var replace = new SearchAndReplace();

  it('replaces a word', function() {
    expect(replace.myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
    ).toEqual("A quick brown fox leaped over the lazy dog");
  });

  it('replaces a word while matching case', function() {
    expect(replace.myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  ).toEqual("He is Sitting on the couch");
  });

});
