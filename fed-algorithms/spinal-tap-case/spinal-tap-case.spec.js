var SpinalCase = require('./spinal-tap-case');

describe('convertTo()', function() {
  var spinalCase = new SpinalCase();

  // it('converts string a to lower case', function() {
  //     expect(spinalCase.convertTo('This Is Spinal Tap')).toEqual('this is spinal tap');
  // });

  it('converts spaces a to dashes', function() {
      expect(spinalCase.convertTo('This Is Spinal Tap')).toEqual('this-is-spinal-tap');
  });

  it('converts underscores a to dashes', function() {
      expect(spinalCase.convertTo('This_Is_Spinal_Tap')).toEqual('this-is-spinal-tap');
  });

  it('converts a string with different word-separators into spinal case', function() {
      expect(spinalCase.convertTo('Teletubbies say Eh-oh')).toEqual('teletubbies-say-eh-oh');
  });

  it('separates a continuous string of words with dashes', function() {
      expect(spinalCase.convertTo('ThisIsSpinalTap')).toEqual('this-is-spinal-tap');
  });

  it('converts a string with different word-separators into spinal case', function() {
      expect(spinalCase.convertTo('AllThe-small Things')).toEqual('all-the-small-things');
  });

});
