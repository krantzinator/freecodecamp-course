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
										["NICKEL", 0.5],
										["PENNY", 0.01]];

CashRegister.prototype.checkDrawer = function(price, cash, cid) {
	var changeDue = cash - price;
	var totalCashInDrawer = 0;

	// first convert cash-in-drawer to total change to evaluate if change can be paid out
	for (let [key, value] of cid) {
		totalCashInDrawer += value;
	}
	// necessary to remove the extended floating numberals, i.e. .4999999999999 instead of .50
	totalCashInDrawer = parseFloat(totalCashInDrawer.toFixed(2));

	// var cidObj = {};
	// cid.forEach(function(item){
	// 	cidObj[item[0]] = item[1];
	// });
	// console.log(cidObj);
	// console.log(cidObj.PENNY);

	// if changeDue % arrayOfMonies[key/value] <= 1 then y = Math.floor(changeDue % arrayOfMonies[key/value])
	// answer.push(arrayOfMonies[key]: y * arrayOfMonies[value])
	// changeDue -= y
	// repeat for next item in arrayOfMonies (iterate through descending order)


	if (changeDue > totalCashInDrawer) {
		return "Insufficient Funds";
	} else if (totalCashInDrawer === changeDue) {
		return "Closed";
	} else {
		var res = this.calculateCurrencyBreakdown(changeDue);
		console.log(res);
		return res;
	}

};

CashRegister.prototype.calculateCurrencyBreakdown = function(change) {
	var result = [];
	for (let [key, value] of CURRENCY_MAP) {
		console.log(change, value, " = ", change - value);
		if (change - value >= 0) {
			var x = parseFloat((Math.floor(change / value) * value).toFixed(2));
			result.push([key, x]);
			change -= x;
			if (change > 0) {
				this.calculateCurrencyBreakdown(change);
			}
		}
	}
	return result;
};

module.exports = CashRegister;
