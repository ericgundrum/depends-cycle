console.log('begin building c')

try {
  exports.root = require('./ro' + 'ot');
} catch(_) {} finally {
  if (!exports.root) exports.root = { exceptional: true }
}
console.log('exports.root is ', exports.root )
exports.get_root = function () {
    return exports.root;
};

console.log('finished building c', exports)
