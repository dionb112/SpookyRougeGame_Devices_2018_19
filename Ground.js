class Ground
{
    /**
    * Constructor function for Ground 'class'
    * @param {Number} x x coord for starting position
    * @param {Number} y y coord for starting position
    * @param {Number} width width to create ground, Canvas width
    * @param {Number} height height to create ground, 80
    */
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    /**
    * function for drawing the ground
    * @param {Context} ctx context for the html canvas element, '2D'
    */
    draw(ctx)
    {
        ctx.fillStyle='GREY';
        ctx.fillRect(0, GROUND_Y, CANVAS_SIZE , 80);
    }
}
