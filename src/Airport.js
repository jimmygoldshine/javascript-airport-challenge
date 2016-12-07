var Airport = function() {

  this.planePopulation = [];
  this.weatherCondition = 'Fair'

};

Airport.prototype.landPlane = function(plane) {
  if(this.IsStormy()) {
    throw new Error('Stormy weather preventing landing!');
  } else {
  this.planePopulation.push(plane);
  return 'A plane has landed!';
  }
};

Airport.prototype.takeOffPlane = function(plane) {
  if(this.IsStormy()) {
    throw new Error('Stormy weather preventing take-off!');
  } else {
  this.planePopulation.pop();
  return 'A plane has taken off!';
}
};

Airport.prototype.planeCount = function() {
  return this.planePopulation.length;
};

Airport.prototype.IsStormy = function() {
  if(this.weatherCondition == "Stormy") {
    return true;
  } else {
    return false;
  }
};
