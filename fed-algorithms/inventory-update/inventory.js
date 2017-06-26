var Inventory = function(){};

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the
// new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

Inventory.prototype.update = function(arr1, arr2) {
  var newArray = arr1.concat(arr2);

  return newArray;
};

module.exports = Inventory;

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   function(a, b) {
//     return a.concat(b);
//   },
//   []
// );
//
// function filterItems(query) {
//     return fruits.filter(function(el) {
//      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     })
// }
