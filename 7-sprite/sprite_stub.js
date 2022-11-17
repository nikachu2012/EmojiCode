Blockly.JavaScript[`sprite_select`] = function(block) {
  var text_spritename = block.getFieldValue(`spriteName`);
  // TODO: Assemble JavaScript into code variable.
  var code = `'${text_spritename}'`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_sayuu`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.susumu(${value_spritename}, ${value_value});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate_right`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate = Blockly.JavaScript.valueToCode(block, `rotate`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rotateplus(${value_spritename}, ${value_rotate});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate_left`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rotateplus(${value_spritename}, ${-(value_value)});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posxy(${value_spritename}, ${value_x}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_seconds`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_seconds = Blockly.JavaScript.valueToCode(block, `seconds`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posxytime(${value_spritename}, ${value_x}, ${value_y}, ${value_seconds*1000});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rotate(${value_spritename}, ${value_value});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_xdake`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posx(${value_spritename}, ${value_x});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_xdutu`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, `x`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posxplus(${value_spritename}, ${value_x});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_ydake`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posy(${value_spritename}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_move_ydutu`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, `y`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.posyplus(${value_spritename}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript[`sprite_end`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.rebound(${value_spritename});\n`;
  return code;
};

Blockly.JavaScript[`sprite_rotate_houhou`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue(`NAME`);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name == "left-right"){
    var code = `emojisp.rotatetype(${value_spritename}, "lr");\n`;
  }
  else if(dropdown_name == "none"){
    var code = `emojisp.rotatetype(${value_spritename}, "none");\n`;
  }
  else if(dropdown_name == "free"){
    var code = `emojisp.rotatetype(${value_spritename}, "free");\n`;
  }
  return code;
};

Blockly.JavaScript[`sprite_const_xpos`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.spriteData['${value_spritename}'].x`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_const_ypos`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.spriteData['${value_spritename}'].y`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_const_rotate`] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, `spriteName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.accessSpriteData(\`${value_spritename}\`).deg`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`sprite_onclick`] = function(block) {
  var text_id = block.getFieldValue(`id`);
  var statements_run = Blockly.JavaScript.statementToCode(block, `run`);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.spriteData['${text_id}'].on('pointertap',function(){${statements_run}})\n`
  return code;
};

Blockly.JavaScript[`sprite_hide`] = function(block) {
  var value_sprite = Blockly.JavaScript.valueToCode(block, `sprite`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.hide(${value_sprite});\n`;
  return code;
};

Blockly.JavaScript[`sprite_show`] = function(block) {
  var value_sprite = Blockly.JavaScript.valueToCode(block, `sprite`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.show(${value_sprite});\n`;
  return code;
};

Blockly.JavaScript['sprite_collision_boolean'] = function(block) {
  var value_sprite1 = Blockly.JavaScript.valueToCode(block, 'sprite1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sprite2 = Blockly.JavaScript.valueToCode(block, 'sprite2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojisp.collision(\`${value_sprite1}\`,\`${value_sprite2}\`)\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
