document.write('The current version of io.js ' + process.version)

var fs = require('fs')
var path = require('path')
var contents = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')

alert(contents)
