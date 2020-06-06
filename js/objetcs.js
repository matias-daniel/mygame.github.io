// Clase Object
class Object {
    constructor(x, y, w, h, color, depth) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.depth = depth;
        this.dydepth = 0;
    }

    update() {
        this.dydepth = this.y / (Game.c_room.HeightRoom) + this.depth;
    }

    draw() {
        Canvas.setColor(this.color);
        Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}

class Bush extends Object {
    constructor(x, y, w, h, color, depth) {
        super(x, y, w, h, color, depth);
    }

    update() {
        super.update();
    }
}

class Player extends Object {
    constructor(x, y, w, h, color, depth) {
        super(x, y, w, h, color, depth);
        this.speed = 3;
        this.velX = 0
        this.velY = 0;
        this.moveX = 0;
        this.moveY = 0;
    }

    update() {
        // Get input
        this.moveX = Key.down("d") - Key.down("a");
        this.moveY = Key.down("s") - Key.down("w");

        // Velocity
        this.velX = this.speed * this.moveX;
        this.velY = this.speed * this.moveY;

        // Movement
        this.x += this.velX;
        this.y += this.velY;

        super.update();
    }

    draw()  {
        super.draw();
    }
}