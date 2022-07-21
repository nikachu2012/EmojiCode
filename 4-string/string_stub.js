Blockly.JavaScript['string'] = function(block) {
  var text_input = block.getFieldValue('input');

  var code = `\`${text_input}\``;
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

Blockly.JavaScript[`string_random_char`] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, `text`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_text}.charAt(emoji.getRandom(1,${value_text}.length) - 1)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_input_string`] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, `text`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_startindex = Blockly.JavaScript.valueToCode(block, `startIndex`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_endindex = Blockly.JavaScript.valueToCode(block, `endIndex`, Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = `${value_text}.slice(${value_startindex}, ${value_endindex})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_convert`] = function(block) {
  var dropdown_option = block.getFieldValue(`option`);
  var value_text = Blockly.JavaScript.valueToCode(block, `text`, Blockly.JavaScript.ORDER_ATOMIC);
  if(dropdown_option == "upper"){
    var code = `${value_text}.toUpperCase()`
  }
  else if(dropdown_option == "lower"){
    var code = `${value_text}.toUpperCase()`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_delete_space`] = function(block) {
  var dropdown_option = block.getFieldValue(`option`);
  var value_text = Blockly.JavaScript.valueToCode(block, `text`, Blockly.JavaScript.ORDER_ATOMIC);
  
  if(dropdown_option == "both"){
    var code = `${value_text}.trim()`
  }
  else if(dropdown_option == "left"){
    var code = `${value_text}.replace(/^\s+/g,'')`
  }
  else if(dropdown_option == "right"){
    var code = `${value_text}.replace(/\s*$/g,'')`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`string_prompt`] = function(block) {
  var value_because = Blockly.JavaScript.valueToCode(block, `because`, Blockly.JavaScript.ORDER_ATOMIC);
  var code = `emoji.ask(${value_because})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

