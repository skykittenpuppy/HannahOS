CategoryColour += 20;

Blockly.Blocks['AddCollectible'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('AddCollectible');
    this.appendValueInput("Player")
        .setCheck("Player")
        .appendField('Player');
    this.appendValueInput("Collectible")
        .setCheck("Number")
        .appendField('Collectible');
    this.appendValueInput("Charge")
        .setCheck("Number")
        .appendField('Charge');
    this.appendValueInput("FirstTimePickingUp")
        .setCheck("Boolean")
        .appendField('FirstTimePickingUp');
    this.appendValueInput("Slot")
        .setCheck("Number")
        .appendField('Slot');
    this.appendValueInput("VarData")
        .setCheck("Number")
        .appendField('VarData');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(this.colour);
  }
};
Blockly.Lua['AddCollectible'] = function(block) {
  let player = Blockly.Lua.valueToCode(block, "Player", 1000) || "nil";
  let collectible = Blockly.Lua.valueToCode(block, "Collectible", 1000) || "CollectibleType.COLLECTIBLE_NULL";
  let charge = Blockly.Lua.valueToCode(block, "Charge", 1000) || "0";
  let firstTimePickingUp = Blockly.Lua.valueToCode(block, "FirstTimePickingUp", 1000) || "true";
  let slot = Blockly.Lua.valueToCode(block, "Slot", 1000) || "ActiveSlot.SLOT_PRIMARY";
  let varData = Blockly.Lua.valueToCode(block, "VarData", 1000) || "0";
  var code = player+':AddCollectible(' + collectible + ', ' + charge + ', ' + firstTimePickingUp + ', ' + slot + ', ' + varData + ')\n';
  return code;
}

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "EntityPlayer",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "AddCollectible",
      "inputs": {
        "Player": {
          "shadow": {
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
          }
        },
        "Collectible": {
          "shadow": {
            "type": "CollectibleType",
          }
        },
      },
    },
  ]
};