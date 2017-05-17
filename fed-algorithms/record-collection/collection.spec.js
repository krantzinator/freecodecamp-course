var Collection = require('./collection');

describe('updateRecords()', function() {
  var collection = new Collection();

  it('returns collection', function() {
    expect(typeof collection.collectionCopy()).toEqual('object');
  });

  it('adds artist name and updates if name is not there', function() {
      var result = collection.updateRecords(5439, "artist", "ABBA");
      expect(result[5439].artist).toEqual("ABBA");
  });

  it('adds track and updates track value if track is not there', function() {
      var result = collection.updateRecords(5439, "tracks", "Take a Chance on Me");
      expect(result[5439].tracks[0]).toEqual("Take a Chance on Me");
  });

  it('removes artist when fed an empty string', function() {
      var result = collection.updateRecords(2548, "artist", "");
      expect(result[2548].artist).toEqual(null);
  });

  it('inserts a track at the end of an array', function() {
      var result = collection.updateRecords(1245, "tracks", "Addicted to Love");
      var length = result[1245].tracks.length - 1;
      expect(result[1245].tracks[length]).toEqual('Addicted to Love');
  });

  it('inserts a track', function() {
      var result = collection.updateRecords(2468, "tracks", "Free");
      expect(result[2468].tracks[0]).toEqual('1999');
  });

  it('inserts a track', function() {
      var result = collection.updateRecords(2548, "tracks", "");
      expect(result[2548].tracks).toEqual(null);
  });

});
