function game() {
	var output= [];
	var isDivBy3;
	var isDivBy5;
	var has3InIt;
	var has5InIt;


	for (i =1; i<=100; i++) {

		isDivBy3 = (i%3==0);
		isDivBy5 = (i%5==0);
		has3InIt = (i+"").indexOf("3")>-1;
		has5InIt = (i+"").indexOf("5")>-1;

		if (isDivBy3 && isDivBy5){
			output.push("fizzbuzz")
		}
		else if (isDivBy3 || has3InIt){
			output.push("fizz")	
		}
		else if (isDivBy5 || has5InIt){
			output.push("buzz")
		}
		else {
			output.push(i);
		};
	};
	return output;
};
