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
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(this.colour);
  }
};

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