var SumArgs = function(){};

SumArgs.prototype.addTogether = function(){
  var arg1 = arguments[0];
  if (typeof arg1 === 'number') {
    if (arguments.length === 2) {
      if (typeof arguments[1] === 'number') {
        return arg1 + arguments[1];
      } else {
        return undefined;
      }
    } else {
      return function(arg2) {
        if (typeof arg2 === 'number') {
          return arg1 + arg2;
        } else {
          return undefined;
        }
      };
    }
  } else {
    return undefined;
  }
};

module.exports = SumArgs;
