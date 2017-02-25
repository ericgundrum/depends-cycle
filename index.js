
console.log('--- require b_redirect')
var redirect = require('./b_redirect')
console.log('--- end first require\n')

console.log('This is redirect; it should match what was built by b:', redirect)
if (redirect) console.log('redirect.c should be object:', redirect.c)
if (redirect.c) console.log('redirect.c.root should be object:', redirect.c.root)

console.log('--- require root')
var root = require('./root')
console.log('--- end second require\n')

console.log('root should be object:', root)
if (!root.b.get_c) {
  console.log('=== notice root.b is empty')
}
console.log('redirect should match what was built by b:', redirect)
