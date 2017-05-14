var Translator = function(){};

Translator.prototype.binaryAgent = function(str) {
  var counter = '';

  str.split(' ').forEach(function(x){
     counter += String.fromCharCode(parseInt(x, 2));
  });

  return counter;
};

module.exports = Translator;
