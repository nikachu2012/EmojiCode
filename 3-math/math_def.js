[{
  "type": "formula",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "a",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "calc-type",
      "options": [
        [
          {
            "src": "https://img.icons8.com/color/48/000000/plus-math.png",
            "width": 16,
            "height": 16,
            "alt": "+"
          },
          "plus"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/minus-math.png",
            "width": 16,
            "height": 16,
            "alt": "-"
          },
          "minus"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/multiply.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "times"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/divide.png",
            "width": 16,
            "height": 16,
            "alt": "/"
          },
          "divided"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/superscript.png",
            "width": 16,
            "height": 16,
            "alt": "^"
          },
          "super"
        ],
        [
          "あまり",
          "remainder"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "計算処理をします。四則演算及び乗法に対応しています。",
  "helpUrl": "https://example.com"
},
{
  "type": "string",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "string",
      "text": "123"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "数字入力です。",
  "helpUrl": "https://example.com"
},
{
  "type": "math_etc1",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          {
            "src": "https://img.icons8.com/color/48/000000/square-root.png",
            "width": 16,
            "height": 16,
            "alt": "ルート"
          },
          "root"
        ],
        [
          "絶対値",
          "absolute"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/minus-math.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "minus"
        ],
        [
          "ln",
          "log"
        ],
        [
          "log10",
          "log10"
        ],
        [
          "e^",
          "exp"
        ],
        [
          "10^",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "input",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "数学のいろいろな計算が簡単にできます。",
  "helpUrl": "https://example.com"
},
{
  "type": "math_etc2",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "sin",
          "sin"
        ],
        [
          "cos",
          "cos"
        ],
        [
          "tan",
          "tan"
        ],
        [
          "asin",
          "asin"
        ],
        [
          "acos",
          "acos"
        ],
        [
          "atan",
          "atan"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "input",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "数学のいろいろな計算が簡単にできます。",
  "helpUrl": "https://example.com"
},
{
  "type": "const_return",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "π",
          "pi"
        ],
        [
          "e",
          "e"
        ],
        [
          "φ",
          "phi"
        ],
        [
          "∞",
          "infinity"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": 230,
  "tooltip": "いろいろな定数を返します",
  "helpUrl": "https://example.com"
},
{
  "type": "hantei_boolean",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "は偶数",
          "even"
        ],
        [
          "は奇数",
          "odd"
        ],
        [
          "は素数",
          "prime"
        ],
        [
          "は整数",
          "integer"
        ],
        [
          "は正",
          "true"
        ],
        [
          "は負",
          "false"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 230,
  "tooltip": "入力に対する判定を変える",
  "helpUrl": "https://example.com"
},
{
  "type": "rewrite_input",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "四捨五入",
          "round"
        ],
        [
          "切り上げ",
          "roundup"
        ],
        [
          "切り下げ",
          "rounddown"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "input",
      "check": "Number"
    }
  ],
  "output": "Boolean",
  "colour": 230,
  "tooltip": "入力を変換します。",
  "helpUrl": "https://example.com"
},
{
  "type": "list_search",
  "message0": "リストの %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "合計",
          "sum"
        ],
        [
          "最小値",
          "min"
        ],
        [
          "最大値",
          "max"
        ],
        [
          "平均",
          "avg"
        ],
        [
          "中央値",
          "median"
        ],
        [
          "最頻値",
          "mode"
        ],
        [
          "標準偏差",
          "deviasion"
        ],
        [
          "ランダムの項目",
          "random"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "リストの中で指定された条件を返します。",
  "helpUrl": "https://example.com"
},
{
  "type": "random",
  "message0": "%1 から %2 %3 までの乱数",
  "args0": [
    {
      "type": "input_value",
      "name": "start",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "end",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "指定範囲の乱数",
  "helpUrl": "https://example.com"
}]