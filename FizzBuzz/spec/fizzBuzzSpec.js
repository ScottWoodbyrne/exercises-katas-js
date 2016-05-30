describe("my function game", function() {
	it("should exist", function()  {
		expect(game).toBeDefined();
	});

	it("should return an array", function()  {

		var result = game();
		var isArray = ( result instanceof Array )

		expect(isArray).toBeTruthy();
	});   

	it("should return an array of 100 elements", function()  {
		var result = game();
		expect(result.length).toEqual(100);	
	});  

	it("should return first element of array", function () {
		var result = game();
		expect(result[0]).toEqual(1);
	})

    it("should print fizz for number divisable by 3", function () {
    	var result = game();
		expect(result[8]).toEqual("fizz");
    });

    it("should print fizz for numbers that contain 3", function () {
    	var result = game();
		expect(result[12]).toEqual("fizz");
    });

        it("should print buzz for number divisable by 5", function () {
    	var result = game();
		expect(result[9]).toEqual("buzz");
    });

   it("should print buzz for numbers that contain 5", function () {
    	var result = game();
		expect(result[24]).toEqual("buzz");
    });
   	it("should print fizzbuzz for numbers divisable by 3 AND 5", function () {
    	var result = game();
		expect(result[14]).toEqual("fizzbuzz");
    });
   

});