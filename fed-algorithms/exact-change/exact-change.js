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

var changeDueObj = {	"PENNY": 0.01,
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
	var arrayOfMonies = Object.keys(changeDueObj);
	var totalCashInDrawer = 0;

	// first convert cash-in-drawer to total change to evaluate if change can be paid out
	for (let [key, value] of cid) {
		totalCashInDrawer += value;
	}
	// necessary to remove the extended floating numberals, i.e. .4999999999999 instead of .50
	totalCashInDrawer = parseFloat(totalCashInDrawer.toFixed(2));

	var cidObj = {};
	cid.forEach(function(item){
		cidObj[item[0]] = item[1];
	});
	console.log(cidObj);
	console.log(changeDue);
	console.log(arrayOfMonies);
	console.log(cidObj.PENNY);
	// need to convert cid aray into form comparable to changeDue

	// if changeDue % arrayOfMonies[key/value] <= 1 then y = Math.floor(changeDue % arrayOfMonies[key/value])
	// answer.push(arrayOfMonies[key]: y * arrayOfMonies[value])
	// changeDue -= y
	// repeat for next item in arrayOfMonies (iterate through descending order)


	if (changeDue > totalCashInDrawer) {
		return "Insufficient Funds";
	} else if (totalCashInDrawer === changeDue) {
		return "Closed";
	} else {
		// rest of the function
		return change;
	}

};

CashRegister.prototype.calculateCurrencyBreakdown = function(change) {
	for (let [key, value] of changeDueObj) {
		if (change % value >= 1)
			var x = Math.floor(change / value);
			// x = 2
			var y = value * x;
			// y = .50

	}
};

module.exports = CashRegister;
