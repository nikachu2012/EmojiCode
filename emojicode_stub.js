/* 
    EmojiCode Block Stub
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Fri Aug 05 2022 22:40:20 GMT+0900 (日本標準時)
*/


import Blockly from 'blockly'
Blockly.JavaScript[`if`] = function(block) {
  var value_formula = Blockly.JavaScript.valueToCode(block, `formula`, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_true = Blockly.JavaScript.statementToCode(block, `true`);

  var code = `if(${value_formula}){${statements_true}}`;
  return code;
};

Blockly.JavaScript[`if_else`] = function(block) {
  var value_formula = Blockly.JavaScript.valueToCode(block, `formula`, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_true = Blockly.JavaScript.statementToCode(block, `true`);
  var statements_false = Blockly.JavaScript.statementToCode(block, `false`);
  
  var code = `if(${value_formula}){${statements_true}}else{${statements_false}}`;
  return code;
};

Blockly.JavaScript[`equals_return_boolean`] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, `a`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select_equal = block.getFieldValue(`select-equal`);
  var value_b = Blockly.JavaScript.valueToCode(block, `b`, Blockly.JavaScript.ORDER_ATOMIC);

  if (dropdown_select_equal == "equals") {
    var code = `${value_a} == ${value_b}`;
  }
  else if (dropdown_select_equal == "not-equal") {
    var code = `${value_a} !== ${value_b}`;
  }
  else if (dropdown_select_equal == "less-than") {
    var code = `${value_a} < ${value_b}`;
  }
  else if (dropdown_select_equal == "less-or-equal-than") {
    var code = `${value_a} <= ${value_b}`;
  }
  else if (dropdown_select_equal == "more-than") {
    var code = `${value_a} > ${value_b}`;
  }
  else if (dropdown_select_equal == "more-or-equal-than") {
    var code = `${value_a} >= ${value_b}`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`not`] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, `NAME`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `!(${value_name})`;
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
  var code = `null`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`test`] = function(block) {
  var value_test = Blockly.JavaScript.valueToCode(block, `test`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_if_true = Blockly.JavaScript.valueToCode(block, `if true`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_if_false = Blockly.JavaScript.valueToCode(block, `if false`, Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_test} ? ${value_if_true} : ${value_if_false}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['delay'] = function(block) {
  var value_wait = Blockly.JavaScript.valueToCode(block, 'wait', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emoji.delay(${value_wait})`;
  return code;
};

Blockly.JavaScript['start'] = function(block) {
  var statements_runcode = Blockly.JavaScript.statementToCode(block, 'runcode');
  // TODO: Assemble JavaScript into code variable.
  var code = `${statements_runcode}`;
  return code;
}; 
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
Blockly.JavaScript[`formula`] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, `a`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_calc_type = block.getFieldValue(`calc-type`);
  var value_b = Blockly.JavaScript.valueToCode(block, `b`, Blockly.JavaScript.ORDER_ATOMIC);
  
  if(dropdown_calc_type == "plus"){
    // 足し算
    var code = `${value_a} + ${value_b}`
  }
  else if(dropdown_calc_type == "minus"){
    // 引き算
    var code = `${value_a} - ${value_b}`
  }
  else if(dropdown_calc_type == "times"){
    // 掛け算
    var code = `${value_a} * ${value_b}`
  }
  else if(dropdown_calc_type == "divided"){
    // 割り算
    var code = `${value_a} / ${value_b}`
  }
  else if(dropdown_calc_type == "super"){
    // あまり
    var code = `${value_a} % ${value_b}`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`math_etc1`] = function(block) {
  var dropdown_select = block.getFieldValue(`select`);
  var value_input = Blockly.JavaScript.valueToCode(block, `input`, Blockly.JavaScript.ORDER_ATOMIC);
  
  if(dropdown_select == "root"){
    var code = `Math.sqrt(${value_input})`
  }
  else if(dropdown_select == "absolute"){
    var code = `Math.abs(${value_input})`
  }
  else if(dropdown_select == "minus"){
    var code = `-${value_input}`
  }
  else if(dropdown_select == "log"){
    var code = `Math.log(${value_input})`
  }
  else if(dropdown_select == "log10"){
    var code = `Math.log(${value_input}) / Math.log(10)`
  }
  else if(dropdown_select == "exp"){
    var code = `Math.exp(${value_input})`
  }
  else if(dropdown_select == "10"){
    var code = `Math.pow(${value_input})`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`math_etc2`] = function(block) {
  var dropdown_select = block.getFieldValue(`select`);
  var value_input = Blockly.JavaScript.valueToCode(block, `input`, Blockly.JavaScript.ORDER_ATOMIC);
  if(dropdown_select == "sin"){
    var code = `Math.sin(${value_input} / 180 * Math.PI)`
  }
  else if(dropdown_select == "cos"){
    var code = `Math.cos(${value_input} / 180 * Math.PI)`
  }
  else if(dropdown_select == "tan"){
    var code = `Math.tan(${value_input} / 180 * Math.PI)`
  }
  else if(dropdown_select == "asin"){
    var code = `Math.asin(${value_input} / 180 * Math.PI)`
  }
  else if(dropdown_select == "acos"){
    var code = `Math.acos(${value_input} / 180 * Math.PI)`
  }
  else if(dropdown_select == "atan"){
    var code = `Math.atan(${value_input} / 180 * Math.PI)`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`const_return`] = function(block) {
  var dropdown_name = block.getFieldValue(`NAME`);
  if(dropdown_name == "pi"){
    var code = `Math.PI`
  }
  else if(dropdown_name == "e"){
    var code = `Math.E`
  }
  else if(dropdown_name == "phi"){
    var code = `(1 + Math.sqrt(5)) / 2`
  }
  else if(dropdown_name == "infinity"){
    var code = `Infinity`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`hantei_boolean`] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, `NAME`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue(`select`);
  if(dropdown_select == "even"){
    var code = `${value_name} % 2 === 0`
  }
  else if(dropdown_select == "odd"){
    var code = `${value_name} % 2 === 1`
  }
  else if(dropdown_select == "prime"){
    var code = `emoji.isPrime(${value_name})`
  }
  else if(dropdown_select == "integer"){
    var code = `${value_name} % 2 === 0`
  }
  else if(dropdown_select == "true"){
    var code = `${value_name} > 0`
  }
  else if(dropdown_select == "false"){
    var code = `${value_name} < 0`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`rewrite_input`] = function(block) {
  var dropdown_select = block.getFieldValue(`select`);
  var value_input = Blockly.JavaScript.valueToCode(block, `input`, Blockly.JavaScript.ORDER_ATOMIC);

  if(dropdown_select == "round"){
    var code = `Math.round(${value_name})`
  }
  else if(dropdown_select == "roundup"){
    var code = `Math.ceil(${value_name})`
  }
  else if(dropdown_select == "rounddown"){
    var code = `Math.floor(${value_name})`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`list_search`] = function(block) {
  var dropdown_select = block.getFieldValue(`select`);
  var value_name = Blockly.JavaScript.valueToCode(block, `NAME`, Blockly.JavaScript.ORDER_ATOMIC);

  if(dropdown_select == "sum"){
    var code = `${value_name}.reduce(function(x, y) {return x + y;})`
  }
  else if(dropdown_select == "min"){
    var code = `Math.min.apply(null, ${value_name})`
  }
  else if(dropdown_select == "max"){
    var code = `Math.max.apply(null, ${value_name})`
  }
  else if(dropdown_select == "avg"){
    var code = `emoji.listavg(${value_name})`
  }
  else if(dropdown_select == "median"){
    var code = `emoji.listmedian(${value_name})`
  }
  else if(dropdown_select == "mode"){
    var code = `emoji.mode(${value_name})`
  }
  else if(dropdown_select == "deviasion"){
    var code = `emoji.deviasion(${value_name})`
  }
  else if(dropdown_select == "random"){
    var code = `emoji.randomList(${value_name})`
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`random`] = function(block) {
  var value_start = Blockly.JavaScript.valueToCode(block, `start`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_end = Blockly.JavaScript.valueToCode(block, `end`, Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = `emoji.getRandom(${value_start}, ${value_end})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}; 
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

Blockly.JavaScript[`list_insert`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `array`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, `index`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, `data`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.splice(${value_index},0,${value_data})`;
  return code;
};

Blockly.JavaScript[`list_replace`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `array`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, `index`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.splice(${value_index - 1}, 1, ${value_value})`;
  return code;
};

Blockly.JavaScript[`list_index`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `array`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, `index`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}[${value_index}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_str_index'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue('select');

  if(dropdown_select == 'first'){
    //indexOf
    var code = `${value_array}.indexOf(${value_value})`
  }
  else if(dropdown_select == 'last'){
    //lastIndexOf
    var code = `${value_array}.lastIndexOf(${value_value})`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`list_length`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `array`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.length`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`list_boolean_insert`] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, `array`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, `value`, Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_array}.includes(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}; 
Blockly.JavaScript[`color_selector`] = function(block) {
  var colour_select = block.getFieldValue(`select`);
  // TODO: Assemble JavaScript into code variable.
  var code = `${colour_select}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`color_random`] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `#${emoji.dec_hex(emoji.getRandom(0,255))}${emoji.dec_hex(emoji.getRandom(0,255))}${emoji.dec_hex(emoji.getRandom(0,255))}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript[`color_option`] = function(block) {
  var value_red = Blockly.JavaScript.valueToCode(block, `red`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_green = Blockly.JavaScript.valueToCode(block, `green`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_blue = Blockly.JavaScript.valueToCode(block, `blue`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `#${emoji.dec_hex(parseInt(value_red))}${emoji.dec_hex(parseInt(value_green))}${emoji.dec_hex(parseInt(value_blue))}`;
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
Blockly.JavaScript['sound_play'] = function(block) {
  var value_soundname = Blockly.JavaScript.valueToCode(block, 'soundName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_pause'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_effect_select'] = function(block) {
  var value_soundname = Blockly.JavaScript.valueToCode(block, 'soundName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue('select');
  var value_effect_level = Blockly.JavaScript.valueToCode(block, 'effect_level', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_effect_dutu'] = function(block) {
  var value_soundname = Blockly.JavaScript.valueToCode(block, 'soundName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue('select');
  var value_effect_level = Blockly.JavaScript.valueToCode(block, 'effect_level', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_volume_select'] = function(block) {
  var value_volume = Blockly.JavaScript.valueToCode(block, 'volume', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_volume_dutu'] = function(block) {
  var value_volume = Blockly.JavaScript.valueToCode(block, 'volume', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_tone'] = function(block) {
  var value_onkai = Blockly.JavaScript.valueToCode(block, 'onkai', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue('select');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
}; 
