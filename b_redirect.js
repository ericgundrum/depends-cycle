console.log('begin building b_redirect')

module.exports = require('./b')

console.log('finished building b_redirect', module.exports)
if (!module.exports.get_c) {
  console.log('=== notice b_redirect is empty')
}
