CategoryColour += 20;

Blockly.Blocks['CollectibleType'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('CollectibleType')
        .appendField(new Blockly.FieldDropdown([
            ['NULL', "0"],
            ['Sad Onion - 1', "1"],
            ['Inner Eye - 2', "2"],
            ['Spoon Bender - 3', "3"],
        ]), 'Item');
    this.setOutput(true, 'Number');
    this.setColour(this.colour);
  }
};
Blockly.Blocks['PlayerType'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('PlayerType')
        .appendField(new Blockly.FieldDropdown([
            ['Isaac - 0', "0"],
            ['Magdeline - 1', "1"],
            ['Cain - 2', "2"],
            ['Judas - 3', "3"],
            ['Possessor - -1', "-1"],
        ]), 'Item');
    this.setOutput(true, 'Number');
    this.setColour(this.colour);
  }
};

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Enums",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "CollectibleType",
    },
    {
      "kind": "block",
      "type": "PlayerType",
    },
  ]
};