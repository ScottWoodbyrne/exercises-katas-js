function tester(Score1, Score2, Score3) {
	var mean = ((Score1+Score2+Score3) / (3));
	console.log(mean);
	if (mean > 90) {
		return "A";
	}

	else if (mean > 80) {
		return "B"
	}

	else if (mean > 70){
		return "C";
	}
	 
	else if (mean > 60){
		return "D";
	} 

	else {
		return "F";
	}
}
