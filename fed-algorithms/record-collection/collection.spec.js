var Collection = require('./collection');

describe('updateRecords()', function() {
  var collection = new Collection();

  it('returns collection', function() {
    expect(typeof collection.collectionCopy()).toEqual('object');
  });

  it('updates artist name', function() {
      var result = collection.updateRecords(5439, "artist", "ABBA");
      expect(result[5439].artist).toEqual("ABBA");
  });

});
