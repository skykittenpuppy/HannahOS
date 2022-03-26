CategoryColour += 20;

Blockly.Blocks["MC_POST_GAME_STARTED"] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField("MC_POST_GAME_STARTED");
    this.appendValueInput("ModReference")
        //.setCheck("ModReference")
        .appendField("ModReference");
    this.appendValueInput("IsContinued")
        .setCheck("Boolean")
        .appendField("IsContinued");
    this.setInputsInline(false);
    this.setColour(this.colour);
    this.appendStatementInput("Function");
  }
};
Blockly.Lua['MC_POST_GAME_STARTED'] = function(block) {
  let mod = Blockly.Lua.valueToCode(block, "ModReference", 1000);
  let IsContinued = Blockly.Lua.valueToCode(block, "IsContinued", 1000);
  let internalCode = Blockly.Lua.statementToCode(block, "Function");
  
  let OptionalArgs = "";
  if (IsContinued!="") {OptionalArgs = "  if pre_cont ~= "+IsContinued+" then return end\n";}
  var code = mod+':AddCallback(MC_POST_GAME_STARTED, function(pre_cont)\n' + OptionalArgs + internalCode + 'end)\n';
  return code;
}
Blockly.Blocks["MC_POST_PLAYER_INIT"] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField("MC_POST_PLAYER_INIT");
    this.appendValueInput("ModReference")
        .setCheck("ModReference")
        .appendField("ModReference");
    this.appendValueInput("PlayerVariant")
        .setCheck("Number")
        .appendField("PlayerVariant");
    this.setInputsInline(false);
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
      "inputs": {
        "ModReference": {
          "shadow": {
            "type": "ModReferenceGet",
          }
        },
      },
    },
    {
      "kind": "block",
      "type": "MC_POST_PLAYER_INIT",
      "inputs": {
        "ModReference": {
          "shadow": {
            "type": "ModReferenceGet",
          }
        },
      },
    },
  ]
};