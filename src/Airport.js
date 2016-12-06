var Airport = function() {
  this.landed_planes = [];
};


Airport.prototype.authoriseLanding = function(plane, landed_planes) {
  return  this.landed_planes.push(plane);
};

Airport.prototype.is_landed = function(plane) {
  return  this.landed_planes.includes(plane);
};
