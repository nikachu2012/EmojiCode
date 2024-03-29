Blockly.JavaScript[`color_selector`] = function(block) {
  var colour_select = block.getFieldValue(`select`);
  // TODO: Assemble JavaScript into code variable.
  var code = `${colour_select}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`color_random`] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `#${emoji.dec_hex(emoji.getRandom(0,255))}${emoji.dec_hex(emoji.getRandom(0,255))}${emoji.dec_hex(emoji.getRandom(0,255))}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`color_option`] = function(block) {
  var value_red = Blockly.JavaScript.valueToCode(block, `red`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_green = Blockly.JavaScript.valueToCode(block, `green`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_blue = Blockly.JavaScript.valueToCode(block, `blue`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `#${emoji.dec_hex(parseInt(value_red))}${emoji.dec_hex(parseInt(value_green))}${emoji.dec_hex(parseInt(value_blue))}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
