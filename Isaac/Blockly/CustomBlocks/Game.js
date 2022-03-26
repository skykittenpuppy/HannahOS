CategoryColour += 20;

Blockly.Blocks['GetNumPlayers'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('GetNumPlayers');
    this.appendValueInput("Game")
        .appendField('Game')
        .setCheck("Game");
    this.setOutput(true, 'Number');
    this.setColour(this.colour);
  }
};
Blockly.Lua['GetNumPlayers'] = function(block) {
  let game = Blockly.Lua.valueToCode(block, "Game", 1000) || "Game()";
  var code = game+':GetNumPlayers()';
  return [code, Blockly.Lua.ORDER_ATOMIC];
}

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Game",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "GetNumPlayers",
      "inputs": {
        "Game": {
          "shadow": {
            "type": "Game",
          }
        },
      },
    },
  ]
};