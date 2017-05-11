var Finders = require('./finders-keepers');

describe('findElement()', function() {
  var keepers = new Finders();

  it('returns the right stuff', function() {
    expect(keepers.findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toEqual(8);
  });

  it('returns the right stuff again', function() {
    expect(keepers.findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toEqual(undefined);
  });

});
