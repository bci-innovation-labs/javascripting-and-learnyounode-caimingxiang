var fs = require('fs');
//var files = fs.readFile(process.argv[2]).toString().split('\n').length-1;
var myNumber = undefined;


function splitNumber(callback){
	fs.readFile(process.argv[2],function doneReading(err,fileContents){
		myNumber = fileContents.toString().split('\n').length - 1;
		callback();
	})
}


function logMyNumber() {
  console.log(myNumber)
}

splitNumber(logMyNumber)