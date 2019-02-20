var fs = require('fs');
var files = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(files);