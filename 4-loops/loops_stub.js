Blockly.JavaScript['repeat_infinity'] = function(block) {
  var value_loopid = Blockly.JavaScript.valueToCode(block, 'loopID', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = `emoji.infinityLoop.create(${value_loopid}, function(){${statements_do}});\n`;
  return code;
};

Blockly.JavaScript['repeat'] = function(block) {
  var value_loopid = Blockly.JavaScript.valueToCode(block, 'loopID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = `emoji.loop.create(${value_loopid}, function(){${statements_do}}, ${value_index});\n`;
  return code;
};

Blockly.JavaScript['repeat_true'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_formula = Blockly.JavaScript.valueToCode(block, 'formula', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_boolean = block.getFieldValue('boolean');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_boolean == true){
    var code = `emoji.while.create(${value_name}, function(){${statements_do}}, \`${value_formula}\`);\n`;
  }
  else{
    var code = `emoji.while.create(${value_name}, function(){${statements_do}}, \`!${value_formula}\`);\n`;
  }
  return code;
};

Blockly.JavaScript[`repeat_list`] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, `list`, Blockly.JavaScript.ORDER_ATOMIC);
  var variable_various = Blockly.JavaScript.nameDB_.getName(block.getFieldValue(`various`), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, `do`);
  
  var code = `${value_list}.forEach((${variable_various}) => {${statements_do}})\n`;

  return code;
};

Blockly.JavaScript[`break`] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `break;\n`;
  return code;
};

Blockly.JavaScript[`continue`] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `continue;\n`;
  return code;
};

Blockly.JavaScript['repeat_delete'] = function(block) {
  var value_loopid = Blockly.JavaScript.valueToCode(block, 'loopID', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emoji.loop.stop(${value_loopid});\n`;
  return code;
};
