/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
string to their corresponding HTML entities.
*/

var HTMLEntities = function() {};

HTMLEntities.prototype.convertHTML = function(str) {

  var obj = {
    "&": '&​amp;',
    "<": '&​lt;',
    ">": '&​gt;',
    '"': '&​quot;',
    "'": '&​apos;'
  };

  var newstr = str.replace(/[&<>"']/g, function(x) {
    return obj[x];
  });

  return newstr;
};

module.exports = HTMLEntities;
