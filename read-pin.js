var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function() {
  var pin = new five.Pin("A0");
  temporal.loop(500, () => {
      pin.query((state) => console.log(state.value));
  });
});