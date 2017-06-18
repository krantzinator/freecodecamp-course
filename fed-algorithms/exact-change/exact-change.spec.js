var CashRegister = require('./exact-change');

describe('checkDrawer()', function(){
  var cashRegister = new CashRegister();

  it('returns an array', function() {
    expect(typeof cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00],
    ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).
    toEqual('array');
  });

  // it('returns a string', function() {
  //   expect(typeof cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).
  //   toEqual('string');
  // });

  // it('returns a string', function() {
  //   expect(typeof cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).
  //   toEqual('string');
  // });

  // it('returns a string', function() {
  //   expect(cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).
  //   toEqual([["QUARTER", 0.50]]);
  // });

  // it('returns a string', function() {
  //   expect(cashRegister.checkDrawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).
  //   toEqual([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]);
  // });

  it('returns a string', function() {
    expect(cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).
    toEqual('Insufficient Funds');
  });

  it('returns a string', function() {
    expect(cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).
    toEqual('Closed');
  });

});
