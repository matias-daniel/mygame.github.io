class Room{
    constructor(obj, WR, HR) {
        this.obj = obj;
        this.WidthRoom = WR;
        this.HeightRoom = HR;

        Canvas.width = WR;
        Canvas.height = HR;
    }

    update() {
        this.obj.forEach( function(object, index, array) {
            object.update();
        } );
    }

    draw() {
        for (var i = 0; i < this.obj.length; i++) {
            for (var j = i+1; j < this.obj.length; j++) {
                if (this.obj[i].dydepth > this.obj[j].dydepth) {
                    var aux = this.obj[j];
                    this.obj[j] = this.obj[i];
                    this.obj[i] = aux;
                }
            }         
        }

        for (var i = 0; i < this.obj.length; i++) {
            this.obj[i].draw();
        }

    }
}