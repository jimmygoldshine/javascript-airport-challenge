describe ("Weather:", function(){
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe("test that weather is fair when:",function(){

    beforeEach(function(){
      spyOn(weather, 'randomNumber').and.returnValue(2)
    });

    it("random number produces a number 1-4",function(){
      expect(weather.weatherCondition()).toEqual("Fair")
    });
  });

  describe("test that weather is strormy when:", function() {

    beforeEach(function(){
      spyOn(weather, 'randomNumber').and.returnValue(5)
    });

    it("random number produces a number above 4", function() {
      expect(weather.weatherCondition()).toEqual('Stormy')
    });
  });
});
