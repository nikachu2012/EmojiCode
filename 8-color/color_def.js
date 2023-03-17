Blockly.Blocks['color_selector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/color-palette.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldColour("#ff0000"), "select");
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("色をパレットから選ぶことができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['color_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/color-palette.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-random-interface-kiranshastry-gradient-kiranshastry.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("色をランダムに指定します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['color_option'] = {
  init: function() {
    this.appendValueInput("red")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/color-palette.png", 16, 16, { alt: "色", flipRtl: "FALSE" }))
        .appendField("赤");
    this.appendValueInput("green")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 16, 16, { alt: "", flipRtl: "FALSE" }))
        .appendField("青");
    this.appendValueInput("blue")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 16, 16, { alt: "", flipRtl: "FALSE" }))
        .appendField("緑");
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("色を細かく数字で指定できます。");
 this.setHelpUrl("https://example.com");
  }
};
