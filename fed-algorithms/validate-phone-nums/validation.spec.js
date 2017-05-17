var ValidateUSPhone = require('./validation');

describe("telephoneCheck()", function() {
  var validateUSPhone = new ValidateUSPhone();

  it('returns true for default format', function() {
    expect(validateUSPhone.telephoneCheck("555-555-5555")).toEqual(true);
  });

  it('returns true for country code', function() {
    expect(validateUSPhone.telephoneCheck("1 555-555-5555")).toEqual(true);
  });

  it('returns true when area code is in parens, and country code included', function() {
    expect(validateUSPhone.telephoneCheck("1 (555) 555-5555")).toEqual(true);
  });

  it('returns true for continuous string of 10 digits, no hyphens or parens', function() {
    expect(validateUSPhone.telephoneCheck("5555555555")).toEqual(true);
  });

  it('returns true with area code in parens with no space following', function() {
    expect(validateUSPhone.telephoneCheck("(555)555-5555")).toEqual(true);
  });

  it('returns true with area code in parens with no space following, and with country code with no space following', function() {
    expect(validateUSPhone.telephoneCheck("1(555)555-5555")).toEqual(true);
  });

  it('returns true with country code, and with spaces separating each digit segment (no parens or hyphens)', function() {
    expect(validateUSPhone.telephoneCheck("1 555 555 5555")).toEqual(true);
  });

  it('returns false if no area code - only 7 digits with hyphen', function() {
    expect(validateUSPhone.telephoneCheck("555-5555")).toEqual(false);
  });

  it('returns false if no area code - only 7 digits without hyphen', function() {
    expect(validateUSPhone.telephoneCheck("5555555")).toEqual(false);
  });

  it('returns false if area code has inconsistent format with country code', function() {
    expect(validateUSPhone.telephoneCheck("1 555)555-5555")).toEqual(false);
  });

  it('returns false if area code has inconsistent format with no country code', function() {
    expect(validateUSPhone.telephoneCheck("555)-555-5555")).toEqual(false);
  });

  it('returns false if not numbers', function() {
    expect(validateUSPhone.telephoneCheck("123**&!!asdf#")).toEqual(false);
  });

  it('returns false if all 10 digits are inside parens', function() {
    expect(validateUSPhone.telephoneCheck("(6543285746)")).toEqual(false);
  });

  it('returns false if country code is not 1/U.S.', function() {
    expect(validateUSPhone.telephoneCheck("2 (757) 622-7382")).toEqual(false);
  });

  it('returns false if country code is -1', function() {
    expect(validateUSPhone.telephoneCheck("-1 (757) 622-7382")).toEqual(false);
  });

  it('returns false if country code is 10', function() {
    expect(validateUSPhone.telephoneCheck("10 (757) 622-7382")).toEqual(false);
  });

  it('returns false if there are 11 digits', function() {
    expect(validateUSPhone.telephoneCheck("27576227382")).toEqual(false);
  });

  it('returns false if area code is missing closing paren', function() {
    expect(validateUSPhone.telephoneCheck("(555-555-5555")).toEqual(false);
  });

  it('returns false if there are random inter-mixed symbols', function() {
    expect(validateUSPhone.telephoneCheck("(555)5(55?)-5555")).toEqual(false);
  });

});
