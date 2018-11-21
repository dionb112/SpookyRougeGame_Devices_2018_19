class Obstacle
{
    /**
    * Constructor function for Obstacle 'class'
    * @param {Number} x x coord for starting position
    * @param {Number} y y coord for starting position
    * @param {Number} width width to create obstacle
    * @param {Number} height height to create obstacle
    */
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    /**
    * function for drawing the obstacle
    * @param {Context} ctx context for the html canvas element, '2D'
    */
    draw(ctx)
    {
        ctx.fillStyle='GREY';
        ctx.fillRect(OBSTACLE_X, OBSTACLE_Y, 42 , 81);
    }
}
