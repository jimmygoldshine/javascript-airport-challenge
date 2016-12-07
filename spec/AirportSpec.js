describe("Airport:", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane')
  });

  describe("when the weather is NOT stormy:", function() {

    describe("accepts a plane to land and:", function() {

      it("should return confirmation", function() {
        expect(airport.landPlane(plane)).toEqual('A plane has landed!')
      });

      it("should add a plane to the grounded fleet", function() {
        airport.landPlane(plane);
        expect(airport.planeCount()).toEqual(1)
      });
    });

    describe("allows a plane to take off and:", function() {

      it("should return a confirmation", function() {
        expect(airport.takeOffPlane(plane)).toEqual("A plane has taken off!")
      });

      it("should minus a plane from the grounded fleet", function() {
        airport.landPlane(plane);
        airport.takeOffPlane(plane);
        expect(airport.planeCount()).toEqual(0)
      });
    });
  });

  describe("when the weather IS stormy", function() {

    beforeEach(function() {
      spyOn(airport, 'IsStormy').and.returnValue(true)
    });

    it("a plane is refused landing", function() {
      expect(function() {airport.landPlane(plane)}).toThrow(new Error('Stormy weather preventing landing!'))
    });

    it("a plane is refused take off",function(){
      expect(function() {airport.takeOffPlane(plane)}).toThrow(new Error('Stormy weather preventing take-off!'))
    });
  });
});
