var Car = function(type, make, model, year){
    //Properties adjetive that describe the object
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
    //Methods verbs or actions the object can do
    Car.prototype.accelerate = function() //anonomus function has no name
    {
        if(this.speed < 100){
            this.speed += 10;
            console.log("Speed is now: " + this.speed);
        } else
        {
            console.log("Top speed reached");
        }
    },
        
    Car.prototype.brake = function()
    {
        if(this.speed > 10)
        {
            this.speed -= 10;
            console.log("Speed is now: " + this.speed);
        } else
        {
            this.speed = 0;
            console.log("Speed is now: " + this.speed);
        }
    }
}