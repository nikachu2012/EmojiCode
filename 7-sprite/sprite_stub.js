Blockly.JavaScript['sprite_select'] = function(block) {
  var dropdown_selector = block.getFieldValue('selector');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_selector;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sprite_sayuu'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_rotate_right'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate = Blockly.JavaScript.valueToCode(block, 'rotate', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_rotate_left'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_move'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_move_seconds'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_rotate'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_move_xdake'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_move_xdutu'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_move_ydake'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_move_ydutu'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_end'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_rotate_houhou'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sprite_const_xpos'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sprite_const_ypos'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sprite_const_rotate'] = function(block) {
  var value_spritename = Blockly.JavaScript.valueToCode(block, 'spriteName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
