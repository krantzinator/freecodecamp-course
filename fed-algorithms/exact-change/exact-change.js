var CashRegister = function(){};

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

var changeDueArray = {"PENNY": 0.01,
											"NICKEL": 0.5,
											"DIME": 0.10,
											"QUARTER": 0.25,
											"ONE": 1.00,
											"FIVE": 5.00,
											"TEN": 10.00,
											"TWENTY": 20.00,
											"ONE HUNDRED": 100.00};

CashRegister.prototype.checkDrawer = function(price, cash, cid) {
	var changeDue = cash - price;

	console.log(changeDue);
	console.log(Object.keys(changeDueArray));
	return change;
};

CashRegister.prototype.calculateCurrencyBreakdown = function(change) {
	
};

module.exports = CashRegister;
