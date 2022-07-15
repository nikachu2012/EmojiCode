Blockly.JavaScript['string'] = function(block) {
  var text_name = block.getFieldValue('NAME');

  var code = `\`${text_name}\``;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`print`] = function(block) {
  var value_inputvalue = Blockly.JavaScript.valueToCode(block, `inputValue`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `console.log(${value_inputvalue})`;
  return code;
};

Blockly.JavaScript[`string_renketu`] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, `a`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, `b`, Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = `${value_a} + ${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_length`] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, `text`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_text}.length`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_first_index`] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, `a`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, `NAME`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue(`option`);

  if(dropdown_option == "first"){
    var code = `${value_name}.indexOf(${value_a}) + 1`;
  }
  else if(dropdown_option == "last"){
    var code = `${value_name}.lastIndexOf(${value_a}) + 1`;
  }
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_input_char`] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, `text`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue(`option`);
  var value_search_index = Blockly.JavaScript.valueToCode(block, `search-index`, Blockly.JavaScript.ORDER_ATOMIC);
  
  if(dropdown_option == "first"){
    var code = `${value_text}.charAt(${value_search_index -1 })`
  }
  else if(dropdown_option == "last"){
    var code = `${value_text}.slice(-${value_search_index}).charAt(0)`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_random_char'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_input_string'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_startindex = Blockly.JavaScript.valueToCode(block, 'startIndex', Blockly.JavaScript.ORDER_ATOMIC);
  var value_endindex = Blockly.JavaScript.valueToCode(block, 'endIndex', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_convert'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_delete_space'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_prompt'] = function(block) {
  var value_because = Blockly.JavaScript.valueToCode(block, 'because', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['print'] = function(block) {
  var value_inputvalue = Blockly.JavaScript.valueToCode(block, 'inputValue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};