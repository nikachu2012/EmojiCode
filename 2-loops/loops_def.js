[{
  "type": "repeat_infinity",
  "message0": "%1 %2 ∞ 回 %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "無限に繰り返します。",
  "helpUrl": "https://example.com"
},
{
  "type": "repeat",
  "message0": "%1 %2 回 %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "index",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "指定回数分繰り返します。",
  "helpUrl": "https://example.com"
},
{
  "type": "repeat_true",
  "message0": "%1 %2 が %3 に %4 %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "formula",
      "check": "Boolean",
      "align": "RIGHT"
    },
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_dropdown",
      "name": "narumade",
      "options": [
        [
          "なるまで続ける",
          "continue"
        ],
        [
          "なったら終わる",
          "stop"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "指定回数分繰り返します。",
  "helpUrl": "https://example.com"
},
{
  "type": "repeat_setting",
  "message0": "%1 %2 を %3 %4 から %5 %6 まで %7 %8 ずつ %9 %10",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "various",
      "variable": "i"
    },
    {
      "type": "input_dummy"
    },
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
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dutu",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "細かく指定してループを作成することができます。",
  "helpUrl": "https://example.com"
},
{
  "type": "repeat_list",
  "message0": "%1 %2 リスト %3 すべてに実行 %4 中身は %5 %6 %7",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/update-left-rotation.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "list",
      "check": "Array"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "various",
      "variable": "i"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "リストすべてに対して実行できます。",
  "helpUrl": "https://example.com"
},
{
  "type": "break",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency/48/000000/exit.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "colour": 120,
  "tooltip": "ループを終了します。",
  "helpUrl": "https://example.com"
},
{
  "type": "continue",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency/48/000000/circled-right.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "colour": 120,
  "tooltip": "ループの次の回数の処理を行います。",
  "helpUrl": "https://example.com"
}]