var ConvertToRoman = require('./convert-to-roman');

describe('diff()', function() {
  var conversion = new ConvertToRoman();

  it('1 converts to I', function() {
    expect(conversion.convertToRoman(1)).toEqual("I");
  });

  it('5 converts to V', function() {
    expect(conversion.convertToRoman(5)).toEqual("V");
  });

  it('a single digit converts to the correct number of Is', function() {
      expect(conversion.convertToRoman(2)).toEqual("II");
    });

  it('a number surrounding 5 has both a V and an I in the correct order', function() {
    expect(conversion.convertToRoman(6)).toEqual("VI");
  });

  it('a number surrounding 10 has both a X and an I in the correct order', function() {
    expect(conversion.convertToRoman(9)).toEqual("IX");
  });

  it('536 returns DXXXVI', function() {
    expect(conversion.convertToRoman(536)).toEqual("DXXXVI");
  });

});
