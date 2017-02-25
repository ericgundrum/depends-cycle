console.log('begin building b')

module.exports.c = require('./c')
module.exports.get_c = function () {
    return module.exports.c;
};

console.log('finished building b', module.exports)
