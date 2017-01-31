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

  it('if both the first and second letters are consonants, move them both to the end',
  function() {
    expect(translation.translate('glove')).toEqual('oveglay');
  });

});
