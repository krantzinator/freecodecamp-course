var Collection = function() {};

var collectionObject = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

Collection.prototype.collectionCopy = function() {
  return JSON.parse(JSON.stringify(collectionObject));
};

Collection.prototype.updateRecords = function(id, prop, value) {
  if (value === "") {
    delete collectionObject[id][prop];
  } else if (prop !== "tracks") {
      collectionObject[id][prop] = value;
  } else {
    if (!collectionObject[id].tracks) {
      collectionObject[id][prop] = [];
    }
    collectionObject[id][prop].push(value);
  }

  return collectionObject;
};

module.exports = Collection;
