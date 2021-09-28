const names = require('./names')
const hello = require('./modules')
const data = require('./alt_names')
require('./2-modules')

console.log(data)
hello(names.mark)
hello(names.john)
hello(data.name)
