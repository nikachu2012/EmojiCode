Blockly.JavaScript[`sprite_select`] = function(block) {
  var text_spritename = block.getFieldValue(`spriteName`);
  // TODO: Assemble JavaScript into code variable.
  var code = text_spritename;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_sayuu`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.susumu('${value_spritename.replace('(','').replace(')','')}', ${value_value});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate_right`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate = Blockly.JavaScript.valueToCode(block, `rotate`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rotateplus('${value_spritename.replace('(','').replace(')','')}', ${value_rotate});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate_left`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rotateplus('${value_spritename.replace('(','').replace(')','')}', ${-(value_rotate)});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posxy('${value_spritename.replace('(','').replace(')','')}', ${value_x}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_seconds`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_seconds = Blockly.JavaScript.valueToCode(block, `seconds`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posxytime('${value_spritename.replace('(','').replace(')','')}', ${value_x}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rotate('${value_spritename.replace('(','').replace(')','')}', ${value_value});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_xdake`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posx('${value_spritename.replace('(','').replace(')','')}', ${value_x});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_xdutu`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posxplus('${value_spritename.replace('(','').replace(')','')}', ${value_x});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_ydake`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posy('${value_spritename.replace('(','').replace(')','')}', ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_ydutu`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posyplus('${value_spritename.replace('(','').replace(')','')}', ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_end`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rebound('${value_spritename.replace('(','').replace(')','')}');\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate_houhou`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue(`NAME`);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name == "left-right"){
    var code = `emojisp.rotatetype('${value_spritename.replace('(','').replace(')','')}', "lr");\n`;
  }
  else if(dropdown_name == "none"){
    var code = `emojisp.rotatetype('${value_spritename.replace('(','').replace(')','')}', "none");\n`;
  }
  else if(dropdown_name == "free"){
    var code = `emojisp.rotatetype('${value_spritename.replace('(','').replace(')','')}', "free");\n`;
  }
  return code;
};

Blockly.JavaScript[`sprite_const_xpos`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.accessSpriteData('${value_spritename.replace('(','').replace(')','')}').x`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_const_ypos`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.accessSpriteData('${value_spritename.replace('(','').replace(')','')}').y`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_const_rotate`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.accessSpriteData('${value_spritename.replace('(','').replace(')','')}').deg`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
