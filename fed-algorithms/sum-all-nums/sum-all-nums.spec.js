var SumAllNums = require('./sum-all-nums');

describe('sum()', function() {
  var sum = new SumAllNums();

  it('sums one and two', function() {
    expect(sum.sumArrayRange([1,2])).toEqual(3);
  });

  it('sums two sequential numbers', function() {
    expect(sum.sumArrayRange([2,3])).toEqual(5);
  });

  it('sums two numbers where the first number is the lower number', function() {
    expect(sum.sumArrayRange([2,4])).toEqual(9);
  });

  it('sums two numbers where the first number is the higher number', function() {
    expect(sum.sumArrayRange([4,2])).toEqual(9);
  });

  it('sums two numbers that are more than 1 number apart', function() {
    expect(sum.sumArrayRange([23,2])).toEqual(275);
  });

});
