function factorial (digit) {
	var factDigit = 1;
	if(digit === 0 || digit === 1)
		return 1;
	else{
		for (var i = 1; i < digit; i++) {
			factDigit *= (i+1);
		}
		return factDigit;
	}
}
	function map(fn, array){
		var resultArray = [];
		for(var i = 0; i<array.length; i++)
		{
			resultArray.push(fn(array[i]));
		}
		return resultArray;
	}

	var arr = [1, 2, 3, 3, 1];
	var resArr = map(factorial, arr);
	console.log(resArr);
	console.log(arr);