Blockly.JavaScript['repeat_infinity'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['repeat'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['repeat_true'] = function(block) {
  var value_formula = Blockly.JavaScript.valueToCode(block, 'formula', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_boolean = block.getFieldValue('boolean');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['repeat_setting'] = function(block) {
  var variable_various = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('various'), Blockly.Variables.NAME_TYPE);
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
  var value_end = Blockly.JavaScript.valueToCode(block, 'end', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dutu = Blockly.JavaScript.valueToCode(block, 'dutu', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['repeat_list'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_various = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('various'), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['continue'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};