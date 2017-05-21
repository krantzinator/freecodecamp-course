var CashRegister = require('./exact-change');

describe('checkDrawer()', function(){
  var cashRegister = new CashRegister();

  it('returns an array', function() {
    expect(typeof cashRegister.checkDrawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).
    toEqual('array');
  });

});
