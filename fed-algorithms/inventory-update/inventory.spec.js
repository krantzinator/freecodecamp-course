var Inventory = require('./inventory');

describe('update()', function(){
  var inventory = new Inventory();

  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];

  var newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
  ];

  it('combines two 2D arrays', function() {
      var first = [[20, "Apples"]];
      var second = [[60, "Toothpicks"]];
      expect(inventory.update(first, second)).toEqual([[20, "Apples"], [60, "Toothpicks"]]);
  });

  it('returns a two-item array when the first array has one item and the second array has one similar and one unique item', function() {
    var first = [[20, "Apples"]];
    var second = [[5, "Apples"], [60, "Toothpicks"]];
    expect(inventory.update(first, second)).toEqual([[25, "Apples"], [60, "Toothpicks"]]);
  });

  // it('returns an array', function() {
  //   expect(Object.prototype.toString.call(inventory.update(curInv, newInv))).toEqual('[object Array]');
  // });
  //
  // it('has a length of 6 items when an array of 4 items is added to an array with 4 items, 2 of which are unique', function() {
  //   expect(inventory.update(curInv, newInv).length).toEqual(6);
  // });
  //
  // it('returns an array with accurate items and accurate counts of those items', function() {
  //   expect(inventory.update(curInv, newInv)).toEqual([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);
  // });

});

// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
