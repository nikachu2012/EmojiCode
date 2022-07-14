Blockly.JavaScript[`repeat_infinity`] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, `do`);

  var code = `while(true){${statements_do}}`;
  return code;
};

Blockly.JavaScript[`repeat`] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, `index`, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, `do`);

  var code = `for (let index = 0; index < ${value_index}; index++) {${statements_do}}`;
  
  return code;
};

Blockly.JavaScript['repeat_true'] = function(block) {
  var value_formula = Blockly.JavaScript.valueToCode(block, 'formula', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_narumade = block.getFieldValue('narumade');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  if(dropdown_narumade == "continue"){
    //なるまで続ける
    var code = `while(${value_formula}){${dropdown_narumade}}`
  }
  else if(dropdown_narumade == "stop"){
    //なったら終わる
    var code = `while(!(${value_formula})){${dropdown_narumade}}`
  }
  return code;
};

Blockly.JavaScript[`repeat_setting`] = function(block) {
  var variable_various = Blockly.JavaScript.nameDB_.getName(block.getFieldValue(`various`), Blockly.Variables.NAME_TYPE);
  var value_start = Blockly.JavaScript.valueToCode(block, `start`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_end = Blockly.JavaScript.valueToCode(block, `end`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_dutu = Blockly.JavaScript.valueToCode(block, `dutu`, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, `do`);
  
  var code = `for (let ${variable_various} = ${value_start}; ${variable_various} < ${value_end}; ${variable_various}+= ${value_dutu}) {${statements_do}}`;
  return code;
};

Blockly.JavaScript[`repeat_list`] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, `list`, Blockly.JavaScript.ORDER_ATOMIC);
  var variable_various = Blockly.JavaScript.nameDB_.getName(block.getFieldValue(`various`), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, `do`);
  
  var code = `${value_list}.forEach((${variable_various}) => {${statements_do}})`;

  return code;
};

Blockly.JavaScript[`break`] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `break;`;
  return code;
};

Blockly.JavaScript[`continue`] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `continue;`;
  return code;
};