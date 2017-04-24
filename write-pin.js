var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function() {
  var pin = new five.Pin(8);
  temporal.loop(100, () => {
    pin.high();
    temporal.delay(50, () => {
      pin.low()
    });
  });
});