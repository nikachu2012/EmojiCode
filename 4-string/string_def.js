Blockly.Blocks['string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/quote-left.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldTextInput("input"), "input")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/quote-left.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("文字列を入力できます");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['formula'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/color/48/000000/plus-math.png","width":16,"height":16,"alt":"+"},"plus"], [{"src":"https://img.icons8.com/color/48/000000/minus-math.png","width":16,"height":16,"alt":"-"},"minus"], [{"src":"https://img.icons8.com/color/48/000000/multiply.png","width":16,"height":16,"alt":"*"},"times"], [{"src":"https://img.icons8.com/color/48/000000/divide.png","width":16,"height":16,"alt":"/"},"divided"], [{"src":"https://img.icons8.com/color/48/000000/superscript.png","width":16,"height":16,"alt":"^"},"super"], ["あまり","remainder"]]), "calc-type");
    this.appendValueInput("b")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("計算処理をします。四則演算及び乗法に対応しています。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['math_etc1'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/color/48/000000/square-root.png","width":16,"height":16,"alt":"ルート"},"root"], ["絶対値","absolute"], [{"src":"https://img.icons8.com/color/48/000000/minus-math.png","width":16,"height":16,"alt":"*"},"minus"], ["ln","log"], ["log10","log10"], ["e^","exp"], ["10^","OPTIONNAME"]]), "select");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("数学のいろいろな計算が簡単にできます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['math_etc2'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["sin","sin"], ["cos","cos"], ["tan","tan"], ["asin","asin"], ["acos","acos"], ["atan","atan"]]), "select");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("数学のいろいろな計算が簡単にできます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['const_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["π","pi"], ["e","e"], ["φ","phi"], ["∞","infinity"]]), "NAME");
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("いろいろな定数を返します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['hantei_boolean'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["は偶数","even"], ["は奇数","odd"], ["は素数","prime"], ["は整数","integer"], ["は正","true"], ["は負","false"]]), "select");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("入力に対する判定を変える");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['rewrite_input'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["四捨五入","round"], ["切り上げ","roundup"], ["切り下げ","rounddown"]]), "select");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("入力を変換します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_search'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Array")
        .appendField("リストの")
        .appendField(new Blockly.FieldDropdown([["合計","sum"], ["最小値","min"], ["最大値","max"], ["平均","avg"], ["中央値","median"], ["最頻値","mode"], ["標準偏差","deviasion"], ["ランダムの項目","random"]]), "select");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("リストの中で指定された条件を返します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['random'] = {
  init: function() {
    this.appendValueInput("start")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("end")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("までの乱数");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("指定範囲の乱数");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput("inputValue")
        .setCheck("String")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/print.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("コンソール部分に文字を出力します。");
 this.setHelpUrl("https://example.com");
  }
};