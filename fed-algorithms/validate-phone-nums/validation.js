var ValidateUSPhone = function() {};

ValidateUSPhone.prototype.telephoneCheck = function(str) {
  return /^1?\s?\d{3}\s?-?\d{3}\s?-?\d{4}$/.test(str) || /^1?(\(|\s\()\d{3}\)\s?\d{3}-?\d{4}$/.test(str);
};

module.exports = ValidateUSPhone;
