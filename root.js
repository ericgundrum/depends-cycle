console.log('begin building root')

exports.b = require('./b_redirect');
exports.get_b = function () {
    return exports.b;
};

console.log('finished building root', exports)
