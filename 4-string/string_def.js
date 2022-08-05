Blockly.Blocks['string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/quote-left.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldTextInput("input"), "input")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/quote-left.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("文字列を入力できます");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_renketu'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/228BE6/plus-math.png", 16, 16, { alt: "+", flipRtl: "FALSE" }));
    this.appendValueInput("b")
        .setCheck("String");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("文字列を連結します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の長さ");
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("文字列の長さを返します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_first_index'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("が");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("で")
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "option")
        .appendField("に出現する位置");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("指定のテキストがどこで出現するか調べます／ない場合は0");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_input_char'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "option")
        .appendField("から");
    this.appendValueInput("search-index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("文字目");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("テキストの指定文字目を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_random_char'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("のどれかの文字");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("テキストのどれかの文字を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_input_string'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("startIndex")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("endIndex")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("までを取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("テキストの指定範囲のテキストを取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_convert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["小文字に","upper"], ["大文字に","lower"]]), "option");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("テキストの指定範囲のテキストを取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_delete_space'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/fluency/48/000000/data-in-both-directions.png","width":16,"height":16,"alt":"両方"},"both"], [{"src":"https://img.icons8.com/fluency/48/000000/left.png","width":16,"height":16,"alt":"左"},"left"], [{"src":"https://img.icons8.com/fluency/48/000000/right.png","width":16,"height":16,"alt":"右"},"right"]]), "option")
        .appendField("の空白を削除");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("指定方向の空白を削除");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_prompt'] = {
  init: function() {
    this.appendValueInput("because")
        .setCheck("String")
        .appendField("尋ねる");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("入力を要求できます／質問文の入力可");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput("inputValue")
        .setCheck("String")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/print.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("コンソール部分に文字を出力します。");
 this.setHelpUrl("https://example.com");
  }
};