var Canvas = {
	can: null,
	ctx: null,
	width: 500,
	height: 500,
	background: "#000000",
	color: "#000000",
	init: function(w, h, back) {
		Canvas.can = document.getElementById("canvas");
		Canvas.ctx = Canvas.can.getContext('2d');
		Canvas.width      = w;
		Canvas.height     = h;
		Canvas.background = back;
	},
	update: function() {
		// Update size
		Canvas.can.width = Canvas.width;
		Canvas.can.height = Canvas.height;

		// Clear canvas
		Canvas.ctx.fillStyle = Canvas.background;
		Canvas.ctx.fillRect(0, 0, this.width, this.height);
	},
	move_camera: function(x, y) {

	},
	drawRect: function(x, y, w, h) {
		Canvas.ctx.fillStyle = this.color;
		Canvas.ctx.fillRect(x, y, w, h);
	},
	fillRect: function(x, y, w, h) {
		Canvas.ctx.fillStyle = this.color;
		Canvas.ctx.fillRect(x, y, w, h);
	},
	setColor: function(color) {
		this.color = color;
	}

}