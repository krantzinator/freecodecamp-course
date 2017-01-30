var Cipher = require('./cipher');

describe('Cipher', function() {
  var cipher = new Cipher();

  // it('first passing test', function() {
  //   expect(cipher.rot13("SERR PBQR PNZC")).toBe(true);
  // });

  // it('convert string to chars', function() {
  //   expect(cipher.stringToChars("A")).toEqual([65]);
  // });

  // it('add 13 to letter values', function() {
  //   expect(cipher.stringToChars("A")).toEqual([78]);
  // });

  it('convert char to string', function() {
    expect(cipher.rot13("A")).toEqual("N");
  });

  it('convert string of chars to string of chars', function() {
    expect(cipher.rot13("ABC")).toEqual("NOP");
  });

  it('excludes spaces', function() {
    expect(cipher.rot13("A B")).toEqual("N O");
  });

  it('excludes non-word characters, digits, and underscores', function() {
    expect(cipher.rot13("A B.C-D1234567890_")).toEqual("N O.P-Q1234567890_");
  });

  it('goes around the alphabet', function() {
    expect(cipher.rot13("XYZ")).toEqual("KLM");
  });

  it('FCC solution', function() {
    expect(cipher.rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
  });

});
