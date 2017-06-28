var Inventory = function(){};

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the
// new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

Inventory.prototype.update = function(arr1, arr2) {
  // var firstArray = arr1.map(function(x) {
  //   for (let [amount, item] of arr2) {
  //     if (x[1] === item) {
  //       continue;
  //     } else {
  //       return [amount, item];
  //     }
  //   }
  // });

  var firstArray = [];
  for (let [amount, item] of arr1) {
    arr2.forEach(function(y) {
      if (item != y[1]) {
        firstArray.push([amount, item]);
      }
    })
  }

  var secondArray = arr2.map(function(x) {
    console.log("x =", x);
    for (let [amount, item] of arr1) {
      console.log("x =", x, "; amount, item = ", amount, item);
      if (x[1] === item) {
        console.log("returning amount, x[0]");
        return [amount + x[0], item];
      } else {
        console.log("returning x[0], x[1]");
        return [x[0], x[1]];
      }
    }
  });
  var newArrax = arr1.concat(arr2);

  return firstArray.concat(secondArray);
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
