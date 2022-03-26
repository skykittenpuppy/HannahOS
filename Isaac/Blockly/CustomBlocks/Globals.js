CategoryColour += 20;

Blockly.Blocks['RegisterMod'] = {
  colour: CategoryColour,
  init: function() {  
    this.appendDummyInput()
        .appendField("RegisterMod");
    this.appendValueInput("ModName")
        .setCheck("String")
        .appendField("modName");
    this.setOutput(true, 'ModReference');
    this.setColour(this.colour);
  }
};
Blockly.Lua['RegisterMod'] = function(block) {
  var modName = Blockly.Lua.valueToCode(block, 'ModName', 1000) || '"My Mod"';
  var code = 'RegisterMod(' + modName + ', 1)';
  return [code, Blockly.Lua.ORDER_ATOMIC];
}
Blockly.Blocks["Color"] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField("Color");
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("R");
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField("G");
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField("B");
    this.appendValueInput("A")
        .setCheck("Number")
        .appendField("A");
    this.appendValueInput("RO")
        .setCheck("Number")
        .appendField("RO");
    this.appendValueInput("GO")
        .setCheck("Number")
        .appendField("GO");
    this.appendValueInput("BO")
        .setCheck("Number")
        .appendField("BO");
    this.setInputsInline(true);
    this.setOutput(true, "Color");
    this.setColour(this.colour);
  }
}
Blockly.Lua['Color'] = function(block) {
  var r = Blockly.Lua.valueToCode(block, 'R', 1000) || "1";
  var g = Blockly.Lua.valueToCode(block, 'G', 1000) || "1";
  var b = Blockly.Lua.valueToCode(block, 'B', 1000) || "1";
  var a = Blockly.Lua.valueToCode(block, 'A', 1000) || "1";
  var ro = Blockly.Lua.valueToCode(block, 'RO', 1000) || "0";
  var go = Blockly.Lua.valueToCode(block, 'GO', 1000) || "0";
  var bo = Blockly.Lua.valueToCode(block, 'BO', 1000) || "0";
  var code = "Color("+r+", "+g+", "+b+", "+a+", "+ro+", "+go+", "+bo+")";
  return [code, Blockly.Lua.ORDER_ATOMIC];
}
Blockly.Blocks['Font'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('Font');
    this.setOutput(true, 'Font');
    this.setColour(this.colour);
  }
};
Blockly.Lua['Font'] = function(block) {
  var code = "Font()";
  return [code, Blockly.Lua.ORDER_ATOMIC];
}
Blockly.Blocks['Game'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('Game');
    this.setOutput(true, 'Game');
    this.setColour(this.colour);
  }
};
Blockly.Lua['Game'] = function(block) {
  var code = "Game()";
  return [code, Blockly.Lua.ORDER_ATOMIC];
}
Blockly.Blocks["KColor"] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField("KColor");
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("R");
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField("G");
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField("B");
    this.appendValueInput("A")
        .setCheck("Number")
        .appendField("A");
    this.setInputsInline(true);
    this.setOutput(true, "KColor");
    this.setColour(this.colour);
  }
}
Blockly.Lua['KColor'] = function(block) {
  var r = Blockly.Lua.valueToCode(block, 'R', 1000) || "1";
  var g = Blockly.Lua.valueToCode(block, 'G', 1000) || "1";
  var b = Blockly.Lua.valueToCode(block, 'B', 1000) || "1";
  var a = Blockly.Lua.valueToCode(block, 'A', 1000) || "1";
  var code = "KColor("+r+", "+g+", "+b+", "+a+")";
  return [code, Blockly.Lua.ORDER_ATOMIC];
}

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Globals",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "RegisterMod",
    },
    {
      "kind": "block",
      "type": "Game",
    },
    {
      "kind": "block",
      "type": "Font",
    },
    {
      "kind": "block",
      "type": "Color",
      "inputs": {
        "R": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "G": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "B": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "A": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "RO": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 0
            }
          }
        },
        "GO": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 0
            }
          }
        },
        "BO": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 0
            }
          }
        },
      },
    },
    {
      "kind": "block",
      "type": "KColor",
      "inputs": {
        "R": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "G": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "B": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "A": {
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
