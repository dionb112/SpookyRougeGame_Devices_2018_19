class Goal
{
    /**
    * Constructor function for Goal 'class'
    * @param {Number} x x coord for starting position
    * @param {Number} y y coord for starting position
    * @param {Number} width width to create square, 41
    * @param {Number} height height to create square, 41
    */
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    /**
    * function for our square class, clears canvas and draws the square
    * @param {Context} ctx context for the html canvas element, '2D'
    */
    draw(ctx)
    {
        ctx.strokeRect(this.x,this.y,this.width,this.height);
    }
}
