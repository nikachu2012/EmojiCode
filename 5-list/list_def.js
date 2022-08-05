Blockly.Blocks['list_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("リストの作成");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(260);
 this.setTooltip("リストを作成します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_push'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(["String", "Number"]);
    this.appendDummyInput()
        .appendField("を");
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("に追加する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの末尾に追加します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_delete'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("start")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("kosuu")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("個を削除する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの指定場所を削除します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_all_delete'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("のすべてを削除");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの全てを削除します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_insert'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目に");
    this.appendValueInput("data")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("を挿入する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの指定番目に挿入します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_replace'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目を");
    this.appendValueInput("value")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("で置き換えする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの指定番目を置き換えします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_index'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目");
    this.setInputsInline(true);
    this.setOutput(true, ["Number", "String"]);
    this.setColour(260);
 this.setTooltip("リストの指定番目を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_str_index'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の中に");
    this.appendValueInput("value")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("が入る");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "select")
        .appendField("の場所");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
 this.setTooltip("リストに指定文字が入っている場所を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_length'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の長さ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
 this.setTooltip("リストの長さを取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_boolean_insert'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の中に");
    this.appendValueInput("value")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("が入っているか");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(260);
 this.setTooltip("リストに指定文字が入っている場所を取得します");
 this.setHelpUrl("https://example.com");
  }
};