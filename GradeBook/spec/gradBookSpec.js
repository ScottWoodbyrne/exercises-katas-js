describe("my function tester", function() {

  it("should exist", function() {
    expect(tester).toBeDefined();
  });

  it("should return an A when tester(95, 95, 95)", function(){
    var result = tester (95, 95, 95)
    expect(result).toEqual("A");
  });

  it("should return an C when tester (75, 75, 75)", function(){
    var result = tester (75, 75, 75)
    expect(result).toEqual("C");
  });

  it("should return an F when tester (20, 30, 50) ", function(){
    var result = tester (20, 30, 50)
    expect(result).toEqual("F");
  });

  
  it("should return an D when tester (65, 65, 65)", function(){
    var result = tester (65, 65, 65)
    expect(result).toEqual("D");
  });

  it("should return a B when tester (85, 85, 85)", function(){
    var result = tester (85, 85, 85)
    expect(result).toEqual("B");
  });

});
