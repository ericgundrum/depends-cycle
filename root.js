console.log('begin building root')

module.exports.b = require('./b_redirect')
module.exports.get_b = function () {
    return module.exports.b;
}

console.log('finished building root', module.exports)
