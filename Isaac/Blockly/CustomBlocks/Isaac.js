CategoryColour += 20;

Blockly.Blocks['GetPlayer'] = {
  colour: CategoryColour,
  init: function() {
    this.appendValueInput("Player")
        .setCheck("Number")
        .appendField('GetPlayer');
    this.setOutput(true, 'Player');
    this.setColour(this.colour);
  }
};

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