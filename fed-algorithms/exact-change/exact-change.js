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

var changeDueObj = {"PENNY": 0.01,
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


	if (changeDue > cid) {
		return "Insufficient Funds";
	} else if (cid === changeDue) {
		return "Closed";
	} else {
		// rest of the function
		return change;
	}

};

CashRegister.prototype.calculateCurrencyBreakdown = function(change) {

};

module.exports = CashRegister;
