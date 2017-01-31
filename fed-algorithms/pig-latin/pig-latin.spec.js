var PigLatin = require('./pig-latin');

describe('translate()', function() {
  var translation = new PigLatin();

  it('moves the first letter to the end of the word and adds "ay"', function() {
    expect(translation.translate('california')).toEqual('aliforniacay');
  });

  it('ends with "way", keeping rest of word intact, if the word starts with vowel',
  function() {
    expect(translation.translate('algorithm')).toEqual('algorithmway');
  });

});
