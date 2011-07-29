dojo.provide("mygame.gamearea");

dojo.require("dojox.gfx");
dojo.require("mygame.gamething");

// Declare class
dojo.declare("mygame.gamearea", null, 
{
	// Class variables
	canvas:		"",
	gamethings:	[],	// List of things in the game (a thing has a position and can be moved)

	// Class function
	constructor: function(args)
	{
		var id = args.game_div_id;
		console.log("canvas id of canvas DOM element is '"+id+"'");
		// Get reference to the canvas DOM element that is pointed out by the game_div_id argument
		var el = document.getElementById(id);
		console.log("DOM element is "+el);
		// Create a new 2D graphics canvas inside that DOM node
		this.canvas = el.getContext('2d');
		this.canvas.fillStyle = "#b03366";
		this.width = el.getAttribute("width");
		this.height = el.getAttribute("height");
	},

	// Start game
	start: function()
	{
		// Create a thing to be in the game
		var newthing = new mygame.gamething( {x: 10, y: 10, speed: 0.0, direction: 1} );
		var newthing2 = new mygame.gamething( {x: 54, y: 232, speed: 1.0, direction: 2} );
		var newthing3 = new mygame.gamething( {x: 5, y: 10, speed: 2.0, direction: 1} );
		this.gamethings.push(newthing); // Push the new thing on top of the list of things in the game
		this.gamethings.push(newthing2);
		this.gamethings.push(newthing3);
		// Set up game loop so that our _render() function is called 30 times a second
		this.timerID = window.setInterval(dojo.hitch(this, function()
		{
		    this.render();
		}), 1000 / 30);
	},

	// This is the actual game loop
	render: function()
	{
		// Calculate new positions
		for(var i = 0; i < this.gamethings.length; i++)
		{
			var t = this.gamethings[i];
			t.move( {maxx: this.width, maxy: this.height} ); // Move will switch direction if trying to move beyond maxx or maxxy
		}
		// Read player input

		// Clear canvas
		this.canvas.clearRect(0, 0, this.width, this.height);
		// Draw new positions
		for(var i = 0; i < this.gamethings.length; i++)
		{
			var thing = this.gamethings[i];
			thing.draw(this.canvas);
		}

	}

});
