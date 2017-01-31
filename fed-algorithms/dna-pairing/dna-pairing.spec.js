var DNA = require('./dna-pairing');

describe('pairElement()', function() {
  var dna = new DNA();

  it('converts a string of Gs and Cs to an array of arrays containing base pairs', function(){
    expect(dna.pairElement("GCG")).toEqual([["G","C"], ["C","G"], ["G","C"]]);
  });

  it('converts a string including As and Ts to an array of arrays containing base pairs', function(){
    expect(dna.pairElement("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  });

});
