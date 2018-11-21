class Player
{
    /**
    * Constructor function for Player 'class'
    * @param {Number} x x coord for starting position
    * @param {Number} y y coord for starting position
    * @param {Number} width width to create square, 42
    * @param {Number} height height to create square, 42
    * @param {Number} colour rgb values in range 0 - 255
    */
    constructor(x, y, width, height, colour)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.colour = colour
        this.inAir = false;
        this.gravity = 0;
        this.veloX = 0;
        this.veloY = 0;
    }
    // for gravity and movement
    update()
    {
        this.x += this.veloX;
        this.y +=  (this.veloY + this.gravity);

        this.boundary();
        this.land();
        this.friction();
    }
    /**
    * function for our square class, clears canvas and draws the square
    * @param {Context} ctx context for the html canvas element, '2D'
    */
    draw(ctx)
    {
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    /**
    * function for square class to move the square by an offset after key is pressed
    * @param {Number} x ammount to move along x axis
    * @param {Number} y ammount to move along y axis
    */
   boundary()
   {
       if (this.x < 0)
       {
           this.x  = 0;
           this.veloX = 0;
       }
       if (this.x > CANVAS_SIZE - 42)
       {
           this.x = CANVAS_SIZE - 42;
           this.veloX = 0;
       }
   }
   land()
   {
       if (this.inAir)
       {
           if (this.y > GROUND_Y - 42)
           {
               this.veloY = 0;
               this.y = (GROUND_Y - 42);
               this.gravity = 0;
               this.inAir = false;
           }
       }
   }
   friction()
    {
	    // horizontal friction
	    if (this.veloX > 1)
	    {   
		    if (this.veloX > CLOSE_TO_NULL)
		    {
			    this.veloX *= HOR_FRICTION;
		    }   
		    else
		    {
		    	this.veloX = 0;
		    }
	    }
	    else
	    {
    		if (this.veloX < CLOSE_TO_NULL)
	    	{
		    	this.veloX *= HOR_FRICTION;
		    }
		    else
		    {
    			this.veloX = 0;
		    }
	    }
	    // air resistance / gravity sim
	    if (this.inAir)
	    {
    		if (this.veloY < CLOSE_TO_NULL)
		    {
                this.veloY *= VERT_FRICTION;
		    }
	    }
    }
    move(x)
    {
        if (this.veloX > 0)
        {
            if (this.veloX < MAX_VEL)
            {
                this.veloX += x;
            }
        }
        else
        {
            if (this.veloX > -MAX_VEL)
            {
                this.veloX += x;
            }
        }
    }
    jump(y)
    {
        if (!this.inAir)
        {
            this.veloY -= (y * 4.2);
            this.inAir = true;
            this.gravity = 9.8;
        }
    }
    checkCollision(e)
    {
        var collides = false;
        if ((this.x < e.x + e.width) &&
            (this.x + this.width > e.x) &&
            (this.y + this.height > e.y) &&
            (this.y <e.y +e.height))
        {
            collides = true;
            console.log('collision');
        }
        return collides;
    }
}
