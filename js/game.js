var map = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    2, 0, 1, 2, 0,
    2, 0, 0, 0, 0,
    0, 0, 0, 0, 0 
]

var Game = {
    c_room: null,
    init: function() {
        console.log("juego iniciado");

        // Create Objects
        var objects = new Array();
        for (var y = 0; y < 5; y++) {
            for (var x = 0; x < 5; x++) {
       
                switch(map[x + y * 5]) {
                    case 0:
                        objects.push(new Object(x*32, y*32, 32, 32, "#FFFF00", 0));
                        break;
                    case 1:
                        objects.push(new Player(x*32, y*32, 32, 32, "#555555", 2));
                        break;
                    case 2:
                        objects.push(new Bush(x*32, y*32, 32, 32, "#33DD33", 2));
                }
            }
        }

        Game.c_room = new Room(objects, 32*10, 32*10);
    },
    update: function() {
        Game.c_room.update();
    },
    draw: function() {
        Game.c_room.draw();
    }
}