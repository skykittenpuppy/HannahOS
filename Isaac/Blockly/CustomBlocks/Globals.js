CategoryColour += 20;

Blockly.Blocks['ModReferenceGet'] = {
  colour: CategoryColour,
  init: function() {  
    this.appendDummyInput("ModReference")
        .appendField("ModReference")
        .appendField(new Blockly.FieldVariable(
        "Mod", null, ["ModReference"], "ModReference"), "ModReference");
    this.setInputsInline(true);
    this.setOutput(true, 'ModReference');
    this.setColour(this.colour);
  }
};
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
Blockly.Blocks['Font'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('Font');
    this.setOutput(true, 'Font');
    this.setColour(this.colour);
  }
};
Blockly.Blocks['Game'] = {
  colour: CategoryColour,
  init: function() {
    this.appendDummyInput()
        .appendField('Game');
    this.setOutput(true, 'Game');
    this.setColour(this.colour);
  }
};
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

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Globals",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "ModReferenceGet",
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