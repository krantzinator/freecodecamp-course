var Everything = function() {};

Everything.prototype.truthCheck = function(collection, pre) {
    function isTruthy(element) {
        return element[pre];
    }
    return collection.every(isTruthy);
};

module.exports = Everything;
