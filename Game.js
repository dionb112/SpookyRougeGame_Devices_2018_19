/**
 * Game class controls canvas and game loop
 */
class Game
{
    constructor() 
    {    
        this.ctx = {};
        this.boundRecursiveUpdate = this.update.bind(this);
        //                      (x ,  y , w , h )
        this.player = new Player(15, 888, 42, 42, INDIAN_RED);
        // values look a bit weird but give most pleasent visual effect
        this.goal = new Goal(882.5, 888.5, 41, 41);
        this.ground = new Ground(0, GROUND_Y, CANVAS_SIZE , 80);
        this.obstacle = new Obstacle(OBSTACLE_X, OBSTACLE_Y, 42 , 81)
    }
    /**
     * See canvas as local var here but ctx as object of this class
     * to use elsewhere
     */
    initWorld()
    {
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        // append to HTML document
        document.body.appendChild(canvas);
        this.ctx.font = '42px arial';
        document.addEventListener("keydown", this.keyDownHandler.bind(null, this.player)); 
    }
    update()
    {
        this.player.update();
        if(this.player.checkCollision(this.goal))
        {
            this.goalCollisionResponse('WHITE');
        }
        else
        {
            this.goalCollisionResponse(INDIAN_RED);
        }
        if(this.player.checkCollision(this.obstacle))
        {
            this.obstacleCollisionResponse();
        }
        this.draw();
        window.requestAnimationFrame(this.boundRecursiveUpdate);
    }
    draw()
    {
        // clear canvas
        this.ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE); 
        this.ground.draw(this.ctx);
        this.player.draw(this.ctx, this.playerColour);
        this.goal.draw(this.ctx);
        this.obstacle.draw(this.ctx);
    }
    keyDownHandler(player, e)
    {
        switch (e.keyCode)
        {
        case 37:

            player.move(-MOVEMENT);
            break;
        case 39:
            player.move(MOVEMENT);
            break;
        case 32:
            player.jump(MOVEMENT * 1.12);
            break;
        }
        // Space and arrow keys, this prevents scrolling (default behaviour of some keys)
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) 
        {
            e.preventDefault();
        }
    }
    goalCollisionResponse(colour)
    {
        this.player.colour = colour;
    }
    obstacleCollisionResponse()
    {
        // if lands on top of obstacle will 'slip' off
        // TODO: consider enabling landing on block
        // and if moves to edge again enable gravity once more
        if (this.player.x < this.obstacle.x)
        {
            this.player.x = this.obstacle.x - this.player.width;
        }
        else
        {
            this.player.x = this.obstacle.x + this.obstacle.width;
        }
        this.player.veloX = 0;
    }
}
