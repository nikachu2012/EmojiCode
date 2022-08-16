Blockly.JavaScript[`if`] = function(block) {
  var value_formula = Blockly.JavaScript.valueToCode(block, `formula`, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_true = Blockly.JavaScript.statementToCode(block, `true`);

  var code = `if(${value_formula}){${statements_true}}\n`;
  return code;
};

Blockly.JavaScript[`if_else`] = function(block) {
  var value_formula = Blockly.JavaScript.valueToCode(block, `formula`, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_true = Blockly.JavaScript.statementToCode(block, `true`);
  var statements_false = Blockly.JavaScript.statementToCode(block, `false`);
  
  var code = `if(${value_formula}){${statements_true}}else{${statements_false}}\n`;
  return code;
};

Blockly.JavaScript[`equals_return_boolean`] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, `a`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select_equal = block.getFieldValue(`select-equal`);
  var value_b = Blockly.JavaScript.valueToCode(block, `b`, Blockly.JavaScript.ORDER_ATOMIC);

  if (dropdown_select_equal == "equals") {
    var code = `${value_a} == ${value_b}\n`;
  }
  else if (dropdown_select_equal == "not-equal") {
    var code = `${value_a} !== ${value_b}\n`;
  }
  else if (dropdown_select_equal == "less-than") {
    var code = `${value_a} < ${value_b}\n`;
  }
  else if (dropdown_select_equal == "less-or-equal-than") {
    var code = `${value_a} <= ${value_b}\n`;
  }
  else if (dropdown_select_equal == "more-than") {
    var code = `${value_a} > ${value_b}\n`;
  }
  else if (dropdown_select_equal == "more-or-equal-than") {
    var code = `${value_a} >= ${value_b}\n`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`not`] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, `NAME`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `!(${value_name})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`and_or_return_boolean`] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, `a`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_and_or = block.getFieldValue(`and_or`);
  var value_b = Blockly.JavaScript.valueToCode(block, `b`, Blockly.JavaScript.ORDER_ATOMIC);

  if (dropdown_and_or == "and") {
    var code = `${value_a} && ${value_b}`
  }
  else if (dropdown_and_or == "or"){
    var code = `${value_a} || ${value_b}`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`true_false_return`] = function(block) {
  var dropdown_truefalse = block.getFieldValue(`truefalse`);
  if (dropdown_truefalse == "true") {
    var code = "true"
  }
  else if (dropdown_truefalse == "false") {
    var code = "false"
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`null`] = function(block) {
  var code = `null\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`test`] = function(block) {
  var value_test = Blockly.JavaScript.valueToCode(block, `test`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_if_true = Blockly.JavaScript.valueToCode(block, `if true`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_if_false = Blockly.JavaScript.valueToCode(block, `if false`, Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_test} ? ${value_if_true} : ${value_if_false}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['delay'] = function(block) {
  var value_wait = Blockly.JavaScript.valueToCode(block, 'wait', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emoji.delay(${value_wait})\n`;
  return code;
};

Blockly.JavaScript['start'] = function(block) {
  var statements_runcode = Blockly.JavaScript.statementToCode(block, 'runcode');
  // TODO: Assemble JavaScript into code variable.
  var code = `${statements_runcode}\n`;
  return code;
};
