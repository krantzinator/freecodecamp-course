var Boo = require('./boo-who');

describe('checkValue()', function() {
  var boo = new Boo();

  it('return true if the boolean primitive `true` is given', function() {
    expect(boo.checkValue(true)).toEqual(true);
  });

  it('return true if the boolean primitive `false` is given', function() {
    expect(boo.checkValue(false)).toEqual(true);
  });

  it('return false if no boolean primitive is given', function() {
    expect(boo.checkValue("a")).toEqual(false);
  });

  it('return false if null is given', function() {
    expect(boo.checkValue(null)).toEqual(false);
  });

  it('return false if the string "true" is given', function() {
    expect(boo.checkValue("true")).toEqual(false);
  });

});
