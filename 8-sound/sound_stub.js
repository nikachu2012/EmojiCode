Blockly.JavaScript[`sound_play`] = function(block) {
  var value_soundname = Blockly.JavaScript.valueToCode(block, `soundName`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojiau.playSound(${value_soundname});\n`;
  return code;
};

Blockly.JavaScript[`sound_tone`] = function(block) {
  var value_onkai = Blockly.JavaScript.valueToCode(block, `onkai`, Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue(`select`);
  // TODO: Assemble JavaScript into code variable.

  if(dropdown_select == '1'){
    var code = `emojiau.playNote(${value_onkai}, '1m')`
  }
  else if(dropdown_select == '2'){
    var code = `emojiau.playNote(${value_onkai}, '2n')`
  }
  else if(dropdown_select == '4'){
    var code = `emojiau.playNote(${value_onkai}, '4n')`
  }
  else if(dropdown_select == '8'){
    var code = `emojiau.playNote(${value_onkai}, '8n')`
  }
  else if(dropdown_select == '16'){
    var code = `emojiau.playNote(${value_onkai}, '16n')`
  }

  var code = `...;\n`;
  return code;
};

Blockly.JavaScript[`sound_tone_second`] = function(block) {
  var value_onkai = Blockly.JavaScript.valueToCode(block, `onkai`, Blockly.JavaScript.ORDER_ATOMIC);
  var value_second = Blockly.JavaScript.valueToCode(block, `second`, Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `emojiau.playNoteSecond(${value_onkai}, ${value_second});\n`;
  return code;
};
