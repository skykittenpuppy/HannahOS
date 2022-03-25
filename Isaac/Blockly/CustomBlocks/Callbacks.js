CategoryColour += 20;

Blockly.Blocks["MC_POST_GAME_STARTED"] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField("MC_POST_GAME_STARTED");
    this.appendDummyInput("IsContinued")
        .appendField("IsContinued")
        .appendField(new Blockly.FieldDropdown([
            ["-----", "none"],
            ["true", "true"],
            ["false", "false"],
        ]), "IsContinued");
    this.setColour(this.colour);
    this.appendStatementInput("Function");
  }
};
Blockly.Blocks["MC_POST_PLAYER_INIT"] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField("MC_POST_PLAYER_INIT");
    this.appendValueInput("PlayerVariant")
        .setCheck("Number")
        .appendField("PlayerVariant");
    this.setColour(this.colour);
    this.appendStatementInput("Function");
  }
};

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Callbacks",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "MC_POST_GAME_STARTED",
    },
    {
      "kind": "block",
      "type": "MC_POST_PLAYER_INIT",
      "inputs": {
        "PlayerVariant": {
          "shadow": {
            "type": "PlayerType",
          }
        },
      },
    },
  ]
};