CategoryColour = 0;
Blockly.Blocks['text'] = {
  colour: CategoryColour,
  oldInit: Blockly.Blocks['text'].init,
  init: function() {
    this.oldInit();
    this.setColour(this.colour);
  }
}
Blockly.Blocks['logic_boolean'] = {
  colour: CategoryColour,
  oldInit: Blockly.Blocks['logic_boolean'].init,
  init: function() {
    this.oldInit();
    this.setColour(this.colour);
  }
};
Blockly.Blocks['controls_for'] = {
  colour: CategoryColour,
  oldInit: Blockly.Blocks['controls_for'].init,
  init: function() {
    this.oldInit();
    this.setColour(this.colour);
  }
};
Blockly.Blocks['math_number'] = {
  colour: CategoryColour,
  oldInit: Blockly.Blocks['math_number'].init,
  init: function() {
    this.oldInit();
    this.setColour(this.colour);
  }
};
Blockly.Blocks['variables_get'] = {
  colour: CategoryColour,
  oldInit: Blockly.Blocks['variables_get'].init,
  init: function() {
    this.oldInit();
    this.setColour(this.colour);
  }
};
Blockly.Blocks['variables_set'] = {
  colour: CategoryColour,
  oldInit: Blockly.Blocks['variables_set'].init,
  init: function() {
    this.oldInit();
    this.setColour(this.colour);
  }
};

BlocklyToolbox.contents[BlocklyToolbox.contents.length] = {
  "kind": "category",
  "name": "Default",
  "colour": ""+CategoryColour,
  "contents": [
    {
      "kind": "block",
      "type": "text",
    },
    {
      "kind": "block",
      "type": "logic_boolean",
    },
    {
      "kind": "block",
      "type": "math_number",
    },
    {
      "kind": "block",
      "type": "variables_set",
    },
    {
      "kind": "block",
      "type": "variables_get",
    },
    {
      "kind": "block",
      "type": "controls_for",
      "inputs": {
        "FROM": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "TO": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 10
            }
          }
        },
        "BY": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
      }
    },
  ]
};