var Player = function(name, livesLeft, score, speed, gridLocationX, gridLocationY)
    {
    this.name = name;
    this.livesLeft = livesLeft;
    this.score = 0;
    this.speed = 0;
    this.gridLocationX = 0;
    this.gridLocationY = 0;
    }

    Player.prototype.die = function()
    {
           alert("You are dead!");
           }
    }
    
    Player.prototype.moveLeft = function()
    {
        if(this.gridLocationX > 0)
           {
               this.gridLocationX = -1;
               alert("Your player moved 1 space to the left.");
           }
        
    }
    
    Player.prototype.moveRight = function()
    {
       if(this.gridLocationX < 9)
           {
               this.gridLocationX = +1;
                alert("Your player moved 1 space to the right.");
           }
       
    }
    Player.prototype.moveUp = function()
    {
        if(this.gridLocationY >0)
            {
                this.gridLocationY -1;
                alert("Your Player moved 1 space up.");
            }
    }
    Player.prototype.moveDown = function()
    {
        if(this.gridLocationY < 9)
            {
                this.gridLocationY +1;
                alert("Your player moved 1 space down.");
            }
    }
    

    