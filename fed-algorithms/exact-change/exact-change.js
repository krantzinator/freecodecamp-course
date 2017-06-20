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

const CURRENCY_MAP = [["ONE HUNDRED", 100.00],
										["TWENTY", 20.00],
										["TEN", 10.00],
										["FIVE", 5.00],
										["ONE", 1.00],
										["QUARTER", 0.25],
										["DIME", 0.10],
										["NICKEL", 0.05],
										["PENNY", 0.01]];

CashRegister.prototype.checkDrawer = function(price, cash, cid) {
	var cidObj = {};
	cid.forEach(function(item){
		cidObj[item[0]] = item[1];
	});
	var changeDue = cash - price;
	var totalCashInDrawer = 0;

	// first convert cash-in-drawer to total change to evaluate if change can be paid out
	for (let [key, value] of cid) {
		totalCashInDrawer += value;
	}
	// necessary to remove the extended floating numberals, i.e. .4999999999999 instead of .50
	totalCashInDrawer = parseFloat(totalCashInDrawer.toFixed(2));

	if (changeDue > totalCashInDrawer) {
		return "Insufficient Funds";
	} else if (totalCashInDrawer === changeDue) {
		return "Closed";
	} else {
		var res = this.calculateCurrencyBreakdown(changeDue, cidObj);
		return res;
	}

};

CashRegister.prototype.calculateCurrencyBreakdown = function(change, cidObj) {
	var result = [];

	for (let [key, value] of CURRENCY_MAP) {
		if (change - value < 0) { continue; }
		var x = parseFloat((Math.floor(this.useCidOrChange(key, change, cidObj) / value) * value).toFixed(2));
		result.push([key, x]);
		change = parseFloat((change - x).toFixed(2));
	}

	if (change !== 0) { return "Insufficient Funds"; }
	else { return result; }
};

CashRegister.prototype.useCidOrChange = function(key, change, cidObj) {
	if (cidObj[key] > change) {
		return change;
	} else {
		return cidObj[key];
	}
};

module.exports = CashRegister;
