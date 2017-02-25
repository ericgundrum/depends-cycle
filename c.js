console.log('begin building c')

try {
  module.exports.root = require('./ro' + 'ot')
} catch(_) {} finally {
  if (!module.exports.root) module.exports.root = { exceptional: true }
}
console.log('exports.root is ', module.exports.root )
module.exports.get_root = function () {
    return module.exports.root;
};

console.log('finished building c', module.exports)
