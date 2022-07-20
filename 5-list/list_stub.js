Blockly.JavaScript[`list_create`] = function(block) {
  var code = `[]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`list_push`] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_array = Blockly.JavaScript.valueToCode(block, `array`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.push(${value_value})`;
  return code;
};

Blockly.JavaScript[`list_delete`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_start = Blockly.JavaScript.valueToCode(block, `start`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_kosuu = Blockly.JavaScript.valueToCode(block, `kosuu`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.splice(${value_start}, ${value_kosuu})`;
  return code;
};

Blockly.JavaScript[`list_all_delete`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.splice(1,${value_array}.length)`;
  return code;
};

Blockly.JavaScript['list_insert'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['list_replace'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['list_index'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_str_index'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_valuie = Blockly.JavaScript.valueToCode(block, 'valuie', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_length'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_boolean_insert'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};