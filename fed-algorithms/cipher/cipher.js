var Cipher = function() {};

Cipher.prototype.rot13 = function(str) {
  var newArray = [];
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/(\W|\d|\_)/)) {
      newArray.push(str.charCodeAt(i));
    } else {
      str.charCodeAt(i) < 78 ? newArray.push(str.charCodeAt(i) + 13) : newArray.push(str.charCodeAt(i) - 13);
    }
    newStr += String.fromCharCode(newArray[i]);
  }
  return newStr;
};

module.exports = Cipher;
