CategoryColour += 20;

Blockly.Blocks['Game'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('Game');
    this.setOutput(true, 'Game');
    this.setColour(this.colour);
  }
};

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Globals",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "Game",
    },
  ]
};
