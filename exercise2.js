var number = process.argv.slice(2);
	

var sum = 0;
for (var i = number.length -1; i >= 0; i--) {
	

	sum = sum + Number(number[i]);
}
console.log(sum)
