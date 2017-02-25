
var redirect = require('./b_redirect')
console.log('redirect should match what was built by b:', redirect)
if (redirect) console.log('redirect.c should be object:', redirect.c)
if (redirect.c) console.log('redirect.c.root should be object:', redirect.c.root)
var root = require('./root')
console.log('root should be object:', root)
console.log('root.b should match redirect:', root.b)
console.log('redirect should match what was built by b:', redirect)
