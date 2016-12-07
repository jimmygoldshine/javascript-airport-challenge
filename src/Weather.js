var Weather = function () {};

  Weather.prototype.weatherCondition = function() {
    if(this.randomNumber()< 4){
      return 'Fair';
    } else {
      return 'Stormy';
    }
  };
  Weather.prototype.randomNumber = function() {
    return Math.floor(Math.random() * 6) + 1;
  };
