dojo.provide("mygame.gamething");

dojo.declare("mygame.gamething", null,
{
	x:		0,
	y:		0,
	speed:		0,
	direction:	0,  // 0 - up, 1 - right, 2 - down, 3 - left
	height:		10,
	width:		10,

	constructor: function(args)
	{
		this.x = args.x;
		this.y = args.y;
		this.speed = args.speed;
		this.direction = args.direction;
	},

	move: function(args)
	{
		var maxx = args.maxx;
		var maxy = args.maxy;

		if(this.direction == 0)
		{
			this.y -= this.speed;
		}
		if(this.direction == 1)
		{
			this.x += this.speed;
		}
		if(this.direction == 2)
		{
			this.y += this.speed;
		}
		if(this.direction == 3)
		{
			this.x -= this.speed;
		}
		
		// Check boundaries and switch direction if needed
		
		if(this.x < this.width)
		{
			
			this.direction = 1;
		}
		if(this.x > maxx - this.width)
		{
			
			this.direction = 3;
		}
		if(this.y < this.height)
		{
			
			this.direction = 2;
		}
		if(this.y > maxy - this.height)
		{
			
			this.direction = 0;
		}		
	},

	draw: function(canvas)
	{
		canvas.fillRect(this.x, this.y, 10, 10)
	}
});
