CategoryColour += 20;

Blockly.Blocks['CollectibleType'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('CollectibleType')
        .appendField(new Blockly.FieldDropdown([
            ['Sad Onion - 1', "COLLECTIBLE_SAD_ONION"],
            ['Inner Eye - 2', "COLLECTIBLE_INNER_EYE"],
            ['Spoon Bender - 3', "COLLECTIBLE_SPOON_BENDER"],
            ['Null - 0', "COLLECTIBLE_NULL"],
        ]), 'CollectibleType');
    this.setOutput(true, 'Number');
    this.setColour(this.colour);
  }
};
Blockly.Lua['CollectibleType'] = function(block) {
  var code = "CollectibleType."+block.getFieldValue('CollectibleType');
  return [code, Blockly.Lua.ORDER_ATOMIC];
}
Blockly.Blocks['PlayerType'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('PlayerType')
        .appendField(new Blockly.FieldDropdown([
            ['Isaac - 0', "PLAYER_ISAAC"],
            ['Magdeline - 1', "PLAYER_MAGDALENE"],
            ['Cain - 2', "PLAYER_CAIN"],
            ['Judas - 3', "PLAYER_JUDAS"],
            ['Possessor - -1', "PLAYER_POSSESSOR"],
        ]), 'PlayerType');
    this.setOutput(true, 'Number');
    this.setColour(this.colour);
  }
};
Blockly.Lua['PlayerType'] = function(block) {
  var code = "PlayerType."+block.getFieldValue('PlayerType');
  return [code, Blockly.Lua.ORDER_ATOMIC];
}

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