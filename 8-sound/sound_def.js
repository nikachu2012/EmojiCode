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


Blockly.Blocks['sound_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/ios-filled/50/000000/piano.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("onkai")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の音を")
        .appendField(new Blockly.FieldDropdown([["全音符","1"], ["２分音符","2"], ["４分音符","4"], ["８分音符","8"], ["１６分音符","16"]]), "select")
        .appendField("鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("指定トーンの音を出します");
 this.setHelpUrl("https://example.com");
  }
};


Blockly.Blocks['sound_tone_second'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/ios-filled/50/000000/piano.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("onkai")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の音を");
    this.appendValueInput("second")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("秒間鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("指定トーンの音を出します");
 this.setHelpUrl("https://example.com");
  }
};
