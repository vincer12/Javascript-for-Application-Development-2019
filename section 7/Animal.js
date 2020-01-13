var Animal =  function(type, weight, color, fur, length, soundItMakes){
    //Properties
    this.type = type;
    this.weight = weight;
    this.color = color;
    this.fur = fur;
    this.length = length;
    this.soundItMakes = soundItMakes;
    //Methods
    Animal.Prototype.makeSound= function makeSound()
    {
        alert(this.soundItMakes);
    },
    Animal.Prototype.breathe = function()
    {
        alert(this.type + " is " + breathing);
    }
}