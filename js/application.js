
var x = 0, y = 0;

var App = {
    fps: 60,
    back_default: "#1100055",
    init: function() {
        console.log("Aplication iniciada");
        Canvas.init(500, 400, this.back_default);
        Game.init();
        Key.init();
        this.update();
    },
    draw: function() {
        Game.draw();
    },
    update: function() {

        Game.update();

        Canvas.update();
        App.draw();

        requestAnimationFrame(App.update); /// Real Update
    }
}
