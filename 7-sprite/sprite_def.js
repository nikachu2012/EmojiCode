Blockly.Blocks['sprite_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/stickers/100/000000/cat.png", 22, 22, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldTextInput("スプライト名"), "spriteName");
    this.setInputsInline(true);
    this.setOutput(true, "sprite_ID");
    this.setColour(65);
 this.setTooltip("スプライトの選択ができます");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_sayuu'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("歩動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate_right'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/rotate-right.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("rotate")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度回転");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを右に回転します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate_left'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/rotate-left.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度回転");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを左に回転します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("をx: ");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y: ");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_seconds'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("をx: ");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y: ");
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField("に");
    this.appendDummyInput()
        .appendField("秒で動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを指定秒数以内に動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度に向ける");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトの向きを変えます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_xdake'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/x.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("のx座標を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのx座標を指定に変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_xdutu'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/x.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("のx座標を");
    this.appendDummyInput()
        .appendField("づつ動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのｘ座標を指定分づつ動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_ydake'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/y.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("のy座標を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのy座標を指定に変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_ydutu'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/y.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("のy座標を");
    this.appendDummyInput()
        .appendField("づつ動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのｙ座標を指定分づつ動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_end'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendDummyInput()
        .appendField("は、もし端に着いたら跳ね返る");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("端に着いたら跳ね返るようにします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate_houhou'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendDummyInput()
        .appendField("の回転方法を")
        .appendField(new Blockly.FieldDropdown([["左右のみ","left-right"], ["回転しない","none"], ["自由に回転","free"]]), "NAME")
        .appendField("のみにする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトの回転方向を変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_const_xpos'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/x.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("のｘ座標");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("指定したスプライトのｘ座標を取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_const_ypos'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/y.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("のｙ座標");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("指定したスプライトのｙ座標を取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_const_rotate'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendDummyInput()
        .appendField("の向き");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("指定したスプライトの向きを取得します。");
 this.setHelpUrl("https://example.com");
  }
};
