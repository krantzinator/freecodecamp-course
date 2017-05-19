var SymmetricDifference = function() {};

SymmetricDifference.prototype.compute = function(args) {
  var argsArray = Array.prototype.slice.call(arguments);

  // var newArray = args1.filter(function(x) {
  //   return !args2.includes(x);
  // });
  // var secondNewArray = args2.filter(function(x) {
  //   return !args1.includes(x);
  // });
  // newArray.push(args2.filter(notPresent));

  return argsArray.reduce(function(acc, item){
      console.log("1", acc, item);
      return item.reduce(function(acc, item) {
        console.log("2", acc, item);
        if (!acc.includes(item)) {
          acc.push(item);
        } else {
          // blahde
        }
        console.log(acc);
        return acc;
      }, acc);
  }, []);
};

module.exports = SymmetricDifference;
