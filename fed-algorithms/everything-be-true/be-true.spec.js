var Everything = require('./be-true');

describe('truthCheck()', function() {
  var everything = new Everything();

  it('returns true', function(){
      expect(everything.truthCheck([
      {"user": "Tinky-Winky", "sex": "male"},
      {"user": "Dipsy", "sex": "male"},
      {"user": "Laa-Laa", "sex": "female"},
      {"user": "Po", "sex": "female"}
      ],
      "sex")).toEqual(true);
  });

  it('returns false', function() {
    expect(everything.truthCheck([
    {"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}],
    "sex")).toEqual(false);
  });

  it('returns false', function() {
    expect(everything.truthCheck([
    {"user": "Tinky-Winky", "sex": "male", "age": 0},
    {"user": "Dipsy", "sex": "male", "age": 3},
    {"user": "Laa-Laa", "sex": "female", "age": 5},
    {"user": "Po", "sex": "female", "age": 4}],
    "age")).toEqual(false);
  });

  it('returns false', function() {
    expect(everything.truthCheck([
    {"name": "Pete", "onBoat": true},
    {"name": "Repeat", "onBoat": true},
    {"name": "FastFoward", "onBoat": null}],
    "onBoat")).toEqual(false);
  });

  it('returns true with a single item in the object', function(){
      expect(everything.truthCheck([{"single": "yes"}], "single")).toEqual(true);
  });

  it('returns false with an undefined key for the given value', function(){
      expect(everything.truthCheck([{"single": "double"}, {"single": undefined}], "single")).toEqual(false);
  });

  it('returns false with a NaN key for the given value', function(){
      expect(everything.truthCheck([{"single": "double"}, {"single": NaN}], "single")).toEqual(false);
  });

});
