Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("formula")
        .setCheck("Boolean")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/split.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendStatementInput("true")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("条件分岐ができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("formula")
        .setCheck("Boolean")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/split.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendStatementInput("true")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendStatementInput("false")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/delete-sign.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("条件分岐ができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['equals_return_boolean'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/color/48/000000/equal-sign.png","width":16,"height":16,"alt":"*"},"equals"], [{"src":"https://img.icons8.com/color/48/000000/not-equal.png","width":16,"height":16,"alt":"*"},"not-equal"], [{"src":"https://img.icons8.com/color/48/000000/less-than.png","width":16,"height":16,"alt":"*"},"less-than"], [{"src":"https://img.icons8.com/color/48/000000/less-or-equal.png","width":16,"height":16,"alt":"*"},"less-or-equal-than"], [{"src":"https://img.icons8.com/color/48/000000/more-than.png","width":16,"height":16,"alt":"*"},"more-than"], [{"src":"https://img.icons8.com/color/48/000000/more-or-equal.png","width":16,"height":16,"alt":"*"},"more-or-equal-than"]]), "select-equal");
    this.appendValueInput("b")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("数字の比較ができます");
 this.setHelpUrl("https://example.com/");
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("not");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("判定を逆にします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['and_or_return_boolean'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["かつ","and"], ["または","or"]]), "and_or");
    this.appendValueInput("b")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("かつ、またはの判定ができます");
 this.setHelpUrl("https://example.com/");
  }
};

Blockly.Blocks['true_false_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png","width":16,"height":16,"alt":"*"},"true"], [{"src":"https://img.icons8.com/material-outlined/48/000000/delete-sign.png","width":16,"height":16,"alt":"*"},"false"]]), "truefalse");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("判定を逆にします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("何もない");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("何もない(null)を返します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("wait")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("秒待つ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("指定秒待ちます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/FFFFFF/circled-right.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("初めに実行");
    this.appendStatementInput("runcode")
        .setCheck(null);
    this.setColour(210);
 this.setTooltip("初めに実行するコードを入れます");
 this.setHelpUrl("https://example.com");
  }
};