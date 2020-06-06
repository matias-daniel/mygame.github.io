var Key = {
    keys_pressed: new Array(),
    init: function() {
        document.onkeydown = Key.key_down;
        document.onkeyup = Key.key_up;
    },
    key_down: function(e) {
        if (Key.keys_pressed.indexOf(e.key) == -1)
            Key.keys_pressed.push(e.key);
        
    },
    key_up: function(e) {
        var index = Key.keys_pressed.indexOf(e.key);
        if (index !== -1)
            Key.keys_pressed.splice(index, 1);
    },
    down: function(key_code) {
        return (this.keys_pressed.indexOf(key_code) != -1) ? true : false;
    }
}