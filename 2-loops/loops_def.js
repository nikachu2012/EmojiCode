Blockly.Blocks['repeat_infinity'] = {
    init: function() {
      this.appendValueInput("loopID")
          .setCheck("String")
          .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
      this.appendDummyInput()
          .appendField("で∞回のループ");
      this.appendStatementInput("do")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("無限に繰り返します。");
   this.setHelpUrl("https://example.com");
    }
  };

  Blockly.Blocks['repeat'] = {
    init: function() {
      this.appendValueInput("loopID")
          .setCheck("String")
          .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("index")
          .setCheck(null)
          .appendField("で");
      this.appendDummyInput()
          .appendField("回のループ");
      this.appendStatementInput("do")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("指定回数分繰り返します。");
   this.setHelpUrl("https://example.com");
    }
  };

Blockly.Blocks['repeat_setting'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("i"), "various")
        .appendField("を");
    this.appendValueInput("start")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("end")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("まで");
    this.appendValueInput("dutu")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("ずつ");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("細かく指定してループを作成することができます。");
 this.setHelpUrl("https://example.com");
  }
};
  Blockly.Blocks['repeat_true'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("formula")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("で");
      this.appendDummyInput()
          .appendField("が")
          .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png","width":16,"height":16,"alt":"*"},"true"], [{"src":"https://img.icons8.com/material-outlined/48/000000/delete-sign.png","width":16,"height":16,"alt":"*"},"false"]]), "boolean")
          .appendField("になるまで");
      this.appendStatementInput("do")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("指定回数分繰り返します。");
   this.setHelpUrl("https://example.com");
    }
  };

Blockly.Blocks['repeat_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("リスト");
    this.appendDummyInput()
        .appendField("すべてに実行");
    this.appendDummyInput()
        .appendField("中身は")
        .appendField(new Blockly.FieldVariable("i"), "various");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("リストすべてに対して実行できます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/exit.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("ループを終了します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/circled-right.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("ループの次の回数の処理を行います。");
 this.setHelpUrl("https://example.com");
  }
};