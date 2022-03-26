CategoryColour += 20;

Blockly.Blocks['GetPlayer'] = {
  colour: CategoryColour,
  init: function() {
    this.appendValueInput("Player")
        .appendField('GetPlayer')
        .setCheck("Number");
    this.setOutput(true, 'Player');
    this.setColour(this.colour);
  }
};
Blockly.Lua['GetPlayer'] = function(block) {
  let player = Blockly.Lua.valueToCode(block, "Player", 1000) || 1;
  var code = 'Isaac.GetPlayer(' + player + ')\n';
  return [code, Blockly.Lua.ORDER_ATOMIC];
}

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Isaac",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "GetPlayer",
      "inputs": {
        "Player": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
      },
    },
  ]
};