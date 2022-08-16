/* 
    EmojiCode Block Define
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Tue Aug 16 2022 21:18:40 GMT+0900 (日本標準時)
*/


import Blockly from 'blockly'
Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("formula")
        .setCheck("Boolean")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/split.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendStatementInput("true")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("条件分岐ができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("formula")
        .setCheck("Boolean")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/split.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendStatementInput("true")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendStatementInput("false")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/delete-sign.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("条件分岐ができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['equals_return_boolean'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/color/48/000000/equal-sign.png","width":16,"height":16,"alt":"*"},"equals"], [{"src":"https://img.icons8.com/color/48/000000/not-equal.png","width":16,"height":16,"alt":"*"},"not-equal"], [{"src":"https://img.icons8.com/color/48/000000/less-than.png","width":16,"height":16,"alt":"*"},"less-than"], [{"src":"https://img.icons8.com/color/48/000000/less-or-equal.png","width":16,"height":16,"alt":"*"},"less-or-equal-than"], [{"src":"https://img.icons8.com/color/48/000000/more-than.png","width":16,"height":16,"alt":"*"},"more-than"], [{"src":"https://img.icons8.com/color/48/000000/more-or-equal.png","width":16,"height":16,"alt":"*"},"more-or-equal-than"]]), "select-equal");
    this.appendValueInput("b")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("数字の比較ができます");
 this.setHelpUrl("https://example.com/");
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("not");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("判定を逆にします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['and_or_return_boolean'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["かつ","and"], ["または","or"]]), "and_or");
    this.appendValueInput("b")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("かつ、またはの判定ができます");
 this.setHelpUrl("https://example.com/");
  }
};

Blockly.Blocks['true_false_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png","width":16,"height":16,"alt":"*"},"true"], [{"src":"https://img.icons8.com/material-outlined/48/000000/delete-sign.png","width":16,"height":16,"alt":"*"},"false"]]), "truefalse");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("判定を逆にします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("何もない");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("何もない(null)を返します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("wait")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("秒待つ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("指定秒待ちます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/FFFFFF/circled-right.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("初めに実行");
    this.appendStatementInput("runcode")
        .setCheck(null);
    this.setColour(210);
 this.setTooltip("初めに実行するコードを入れます");
 this.setHelpUrl("https://example.com");
  }
}; 
Blockly.Blocks['repeat_infinity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("∞ 回");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("無限にループします");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("回");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("指定回数分繰り返します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['repeat_true'] = {
  init: function() {
    this.appendValueInput("formula")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("が")
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png","width":16,"height":16,"alt":"*"},"true"], [{"src":"https://img.icons8.com/material-outlined/48/000000/delete-sign.png","width":16,"height":16,"alt":"*"},"false"]]), "boolean")
        .appendField("になるまで");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("指定回数分繰り返します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['repeat_setting'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("i"), "various")
        .appendField("を");
    this.appendValueInput("start")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("end")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("まで");
    this.appendValueInput("dutu")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("ずつ");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("細かく指定してループを作成することができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['repeat_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("リスト");
    this.appendDummyInput()
        .appendField("すべてに実行");
    this.appendDummyInput()
        .appendField("中身は")
        .appendField(new Blockly.FieldVariable("i"), "various");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("リストすべてに対して実行できます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/exit.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("ループを終了します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency/48/000000/circled-right.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("ループの次の回数の処理を行います。");
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

Blockly.Blocks['string_renketu'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/228BE6/plus-math.png", 16, 16, { alt: "+", flipRtl: "FALSE" }));
    this.appendValueInput("b")
        .setCheck("String");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("文字列を連結します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の長さ");
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("文字列の長さを返します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_first_index'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("が");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("で")
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "option")
        .appendField("に出現する位置");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("指定のテキストがどこで出現するか調べます／ない場合は0");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_input_char'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "option")
        .appendField("から");
    this.appendValueInput("search-index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("文字目");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("テキストの指定文字目を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_random_char'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("のどれかの文字");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("テキストのどれかの文字を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_input_string'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("startIndex")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("endIndex")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("までを取得");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("テキストの指定範囲のテキストを取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_convert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["小文字に","upper"], ["大文字に","lower"]]), "option");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("テキストの指定範囲のテキストを取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_delete_space'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[{"src":"https://img.icons8.com/fluency/48/000000/data-in-both-directions.png","width":16,"height":16,"alt":"両方"},"both"], [{"src":"https://img.icons8.com/fluency/48/000000/left.png","width":16,"height":16,"alt":"左"},"left"], [{"src":"https://img.icons8.com/fluency/48/000000/right.png","width":16,"height":16,"alt":"右"},"right"]]), "option")
        .appendField("の空白を削除");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("指定方向の空白を削除");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['string_prompt'] = {
  init: function() {
    this.appendValueInput("because")
        .setCheck("String")
        .appendField("尋ねる");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("入力を要求できます／質問文の入力可");
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
Blockly.Blocks['list_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("リストの作成");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(260);
 this.setTooltip("リストを作成します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_push'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(["String", "Number"]);
    this.appendDummyInput()
        .appendField("を");
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("に追加する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの末尾に追加します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_delete'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("start")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("kosuu")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("個を削除する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの指定場所を削除します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_all_delete'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("のすべてを削除");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの全てを削除します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_insert'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目に");
    this.appendValueInput("data")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("を挿入する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの指定番目に挿入します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_replace'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目を");
    this.appendValueInput("value")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("で置き換えする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("リストの指定番目を置き換えします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_index'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("index")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("番目");
    this.setInputsInline(true);
    this.setOutput(true, ["Number", "String"]);
    this.setColour(260);
 this.setTooltip("リストの指定番目を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_str_index'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の中に");
    this.appendValueInput("value")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("が入る");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["最初","first"], ["最後","last"]]), "select")
        .appendField("の場所");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
 this.setTooltip("リストに指定文字が入っている場所を取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_length'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の長さ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
 this.setTooltip("リストの長さを取得します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['list_boolean_insert'] = {
  init: function() {
    this.appendValueInput("array")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField("の中に");
    this.appendValueInput("value")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("が入っているか");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(260);
 this.setTooltip("リストに指定文字が入っている場所を取得します");
 this.setHelpUrl("https://example.com");
  }
}; 
Blockly.Blocks['color_selector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/color-palette.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldColour("#ff0000"), "select");
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("色をパレットから選ぶことができます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['color_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/color-palette.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-random-interface-kiranshastry-gradient-kiranshastry.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("色をランダムに指定します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['color_option'] = {
  init: function() {
    this.appendValueInput("red")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/color/48/000000/color-palette.png", 16, 16, { alt: "色", flipRtl: "FALSE" }))
        .appendField("赤");
    this.appendValueInput("green")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 16, 16, { alt: "", flipRtl: "FALSE" }))
        .appendField("青");
    this.appendValueInput("blue")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 16, 16, { alt: "", flipRtl: "FALSE" }))
        .appendField("緑");
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("色を細かく数字で指定できます。");
 this.setHelpUrl("https://example.com");
  }
}; 
Blockly.Blocks['sprite_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/stickers/100/000000/cat.png", 22, 22, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldTextInput("スプライト名"), "spriteName");
    this.setInputsInline(true);
    this.setOutput(true, "sprite_ID");
    this.setColour(65);
 this.setTooltip("スプライトの選択ができます");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_sayuu'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("歩動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate_right'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/rotate-right.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("rotate")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度回転");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを右に回転します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate_left'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/48/000000/rotate-left.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度回転");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを左に回転します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("をx: ");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y: ");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_seconds'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("をx: ");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y: ");
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField("に");
    this.appendDummyInput()
        .appendField("秒で動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトを指定秒数以内に動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("を");
    this.appendDummyInput()
        .appendField("度に向ける");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトの向きを変えます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_xdake'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/x.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("のx座標を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのx座標を指定に変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_xdutu'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/x.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("のx座標を");
    this.appendDummyInput()
        .appendField("づつ動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのｘ座標を指定分づつ動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_ydake'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/y.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("のy座標を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのy座標を指定に変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_move_ydutu'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/y.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("のy座標を");
    this.appendDummyInput()
        .appendField("づつ動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトのｙ座標を指定分づつ動かします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_end'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendDummyInput()
        .appendField("は、もし端に着いたら跳ね返る");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("端に着いたら跳ね返るようにします。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_rotate_houhou'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendDummyInput()
        .appendField("の回転方法を")
        .appendField(new Blockly.FieldDropdown([["左右のみ","left-right"], ["回転しない","none"], ["自由に回転","free"]]), "NAME")
        .appendField("のみにする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("指定したスプライトの回転方向を変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_const_xpos'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/x.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("のｘ座標");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("指定したスプライトのｘ座標を取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_const_ypos'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/fluency-systems-filled/48/000000/y.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("のｙ座標");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("指定したスプライトのｙ座標を取得します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sprite_const_rotate'] = {
  init: function() {
    this.appendValueInput("spriteName")
        .setCheck("sprite_ID");
    this.appendDummyInput()
        .appendField("の向き");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("指定したスプライトの向きを取得します。");
 this.setHelpUrl("https://example.com");
  }
};
 
Blockly.Blocks['sound_play'] = {
  init: function() {
    this.appendValueInput("soundName")
        .setCheck("sound_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("を再生");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声を再生します");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/no-audio--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("音を止める");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声を止めます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_effect_select'] = {
  init: function() {
    this.appendValueInput("soundName")
        .setCheck("sound_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("に")
        .appendField(new Blockly.FieldDropdown([["ピッチ","pitch"], ["リバーブ","reverve"]]), "select")
        .appendField("の効果を");
    this.appendValueInput("effect_level")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声に効果をつけます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_effect_dutu'] = {
  init: function() {
    this.appendValueInput("soundName")
        .setCheck("sound_ID")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("に")
        .appendField(new Blockly.FieldDropdown([["ピッチ","pitch"], ["リバーブ","reverve"]]), "select")
        .appendField("の効果を");
    this.appendValueInput("effect_level")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("づつ変える");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音声に効果をつけます。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_volume_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("音量を");
    this.appendValueInput("volume")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音量を変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_volume_dutu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/low-volume--v1.png", 16, 16, { alt: "*", flipRtl: "FALSE" }))
        .appendField("音量を");
    this.appendValueInput("volume")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%づつ変える");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("音量を変更します。");
 this.setHelpUrl("https://example.com");
  }
};

Blockly.Blocks['sound_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://img.icons8.com/ios-filled/50/000000/piano.png", 16, 16, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("onkai")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の音を")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["4","4"], ["8","8"], ["16","16"]]), "select")
        .appendField("分音符鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("指定トーンの音を入れます");
 this.setHelpUrl("https://example.com");
  }
}; 
