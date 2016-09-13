// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
//
// You may have to change some private variables/methods to attributes to make all of the functionality work.
//
// Then make the following additions:
//
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

function Vehicle(name, num_wheels, num_passengers, speed){
  if (!(this instanceof Vehicle)){
    return new Vehicle(name, num_wheels, num_passengers, speed)
  }
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      this.name = name;
      this.num_wheels = num_wheels;
      this.num_passengers = num_passengers;
      this.speed = speed;
      this.distance_travelled = 0;
      this.vin = createVin();
      function createVin() {
        var vin = '';
        for (var i = 0; i < 17; i +=1){
          vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
      }
  }
//  var vehicle = {};
Vehicle.prototype.move = function(){
      this.updateDistanceTravelled();
      this.make_noise();
      return this;
    };
Vehicle.prototype.checkMiles = function() {
      console.log(this.distance_travelled);
      return this;
    };
Vehicle.prototype.make_noise = function(){
      console.log("Make some noise!");
      return this;
    };
Vehicle.prototype.updateDistanceTravelled = function() {
    //      this.distance_travelled = 0;
      this.distance_travelled += this.speed;
      console.log(this.distance_travelled);
      return this;
    }
Vehicle.prototype.passenger_pickup = function(new_passengers){
    if (this.name === 'bus'){
      this.num_passengers += new_passengers;
      return this;
   }
 }

vehicle1 = new Vehicle('buick',4,1,40);
vehicle2 = new Vehicle('bike', 2, 1, 15);
vehicle3 = new Vehicle('sedan', 4, 4, 65);
vehicle4 = new Vehicle('bus', 6, 12, 35);
vehicle1.make_noise(console.log("buick goes: HONK HONK"));
vehicle2.make_noise(console.log("bike goes: RING RING"));
vehicle3.make_noise(console.log("sedan goes: BEEP BEEP"));
vehicle4.make_noise(console.log("bus goes: MEEP MEEP"));
vehicle1.checkMiles();
console.log(vehicle1.speed);
console.log(vehicle1.updateDistanceTravelled());
vehicle1.move();
console.log(vehicle4.passenger_pickup(10));
console.log(vehicle3.vin);
