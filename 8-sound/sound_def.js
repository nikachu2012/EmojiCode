Blockly.Blocks['sound_play'] = {
  init: function() {
    this.appendValueInput("soundName")
        .setCheck("sound_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("を再生");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声を再生します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/no-audio--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("音を止める");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声を止めます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_effect_select'] = {
  init: function() {
    this.appendValueInput("soundName")
        .setCheck("sound_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("に")
        .appendField(new Blockly.FieldDropdown([["ピッチ","pitch"], ["リバーブ","reverve"]]), "select")
        .appendField("の効果を");
    this.appendValueInput("effect_level")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声に効果をつけます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_effect_dutu'] = {
  init: function() {
    this.appendValueInput("soundName")
        .setCheck("sound_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("に")
        .appendField(new Blockly.FieldDropdown([["ピッチ","pitch"], ["リバーブ","reverve"]]), "select")
        .appendField("の効果を");
    this.appendValueInput("effect_level")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("づつ変える");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声に効果をつけます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_volume_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("音量を");
    this.appendValueInput("volume")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音量を変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_volume_dutu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("音量を");
    this.appendValueInput("volume")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%づつ変える");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音量を変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/ios-filled/50/000000/piano.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("onkai")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の音を")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["4","4"], ["8","8"], ["16","16"]]), "select")
        .appendField("分音符鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("指定トーンの音を出します");
 this.setHelpUrl("https://example.com");
  }
};
