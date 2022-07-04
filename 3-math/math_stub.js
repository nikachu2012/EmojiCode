Blockly.JavaScript['formula'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_calc_type = block.getFieldValue('calc-type');
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string'] = function(block) {
  var text_string = block.getFieldValue('string');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['math_etc1'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['math_etc2'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['const_return'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['hantei_boolean'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue('select');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rewrite_input'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_search'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random'] = function(block) {
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
  var value_end = Blockly.JavaScript.valueToCode(block, 'end', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};