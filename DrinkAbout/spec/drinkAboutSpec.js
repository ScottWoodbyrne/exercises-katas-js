
describe("my function drinkAbout", function() {

  it("should exist", function() {
    expect(drinkAbout).toBeDefined();
  });

  it("should return drink toddy when called as drinkAbout(13)", function() {
    var result = drinkAbout(13)
    expect(result).toMatch("drink toddy");
  });


  it("should return drink coke when called as drinkAbout(17)", function() {
    var result = drinkAbout(17)
    expect(result).toMatch("drink coke");
  });

  it("should return drink beer when called as drinkAbout(18)", function() {
    var result = drinkAbout(18)
    expect(result).toMatch("drink beer");
  });

  it("should return drink beer when called as drinkAbout(20)", function() {
    var result = drinkAbout(20)
    expect(result).toMatch("drink beer");
  }); 

  it("should return drink whisky when called as drinkAbout(30)", function() {
    var result = drinkAbout(30)
    expect(result).toMatch("drink whisky");
  });


  it("should contain drink when called as drinkAbout(17)", function() {
    var result = drinkAbout(10).indexOf("drink");
    expect(result).not.toEqual(-1);
      });

  
    
});
