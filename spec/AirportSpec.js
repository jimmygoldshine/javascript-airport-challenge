describe("Airport", function() {

  var airport;
  var plane = jasmine.createSpyObj('plane', ['land']);

  beforeEach(function() {
    airport = new Airport();
  });

  it("should authorise a plane to land", function() {
    expect(airport.is_landed(plane)).toEqual(false);
  });
});
