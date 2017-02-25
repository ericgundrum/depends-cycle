console.log('begin building b')

exports.c = require('./c');
exports.get_c = function () {
    return exports.c;
};

console.log('finished building b', exports)
