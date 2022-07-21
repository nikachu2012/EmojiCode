[{
  "type": "string",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/000000/quote-left.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_input",
      "name": "input",
      "text": "input"
    },
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/000000/quote-left.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 160,
  "tooltip": "文字列を入力できます",
  "helpUrl": "https://example.com"
},
{
  "type": "string_renketu",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "a",
      "check": "String"
    },
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/228BE6/plus-math.png",
      "width": 16,
      "height": 16,
      "alt": "+",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 160,
  "tooltip": "文字列を連結します",
  "helpUrl": "https://example.com"
},
{
  "type": "string_length",
  "message0": "%1 の長さ",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 160,
  "tooltip": "文字列の長さを返します",
  "helpUrl": "https://example.com"
},
{
  "type": "string_first_index",
  "message0": "%1 が %2 %3 で %4 に出現する位置",
  "args0": [
    {
      "type": "input_value",
      "name": "a",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "最初",
          "first"
        ],
        [
          "最後",
          "last"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 160,
  "tooltip": "指定のテキストがどこで出現するか調べます／ない場合は0",
  "helpUrl": "https://example.com"
},
{
  "type": "string_input_char",
  "message0": "%1 の %2 から %3 %4 文字目",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "最初",
          "first"
        ],
        [
          "最後",
          "last"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "search-index",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 160,
  "tooltip": "テキストの指定文字目を取得します",
  "helpUrl": "https://example.com"
},
{
  "type": "string_random_char",
  "message0": "%1 のどれかの文字",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 160,
  "tooltip": "テキストのどれかの文字を取得します",
  "helpUrl": "https://example.com"
},
{
  "type": "string_input_string",
  "message0": "%1 の %2 %3 から %4 %5 までを取得",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "startIndex",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "endIndex",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 160,
  "tooltip": "テキストの指定範囲のテキストを取得します。",
  "helpUrl": "https://example.com"
},
{
  "type": "string_convert",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "小文字に",
          "upper"
        ],
        [
          "大文字に",
          "lower"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 160,
  "tooltip": "テキストの指定範囲のテキストを取得します。",
  "helpUrl": "https://example.com"
},
{
  "type": "string_delete_space",
  "message0": "%1 の空白を削除 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          {
            "src": "https://img.icons8.com/fluency/48/000000/data-in-both-directions.png",
            "width": 16,
            "height": 16,
            "alt": "両方"
          },
          "both"
        ],
        [
          {
            "src": "https://img.icons8.com/fluency/48/000000/left.png",
            "width": 16,
            "height": 16,
            "alt": "左"
          },
          "left"
        ],
        [
          {
            "src": "https://img.icons8.com/fluency/48/000000/right.png",
            "width": 16,
            "height": 16,
            "alt": "右"
          },
          "right"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 160,
  "tooltip": "指定方向の空白を削除",
  "helpUrl": "https://example.com"
},
{
  "type": "string_prompt",
  "message0": "尋ねる %1",
  "args0": [
    {
      "type": "input_value",
      "name": "because",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 160,
  "tooltip": "入力を要求できます／質問文の入力可",
  "helpUrl": "https://example.com"
},
{
  "type": "print",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/000000/print.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "inputValue",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "コンソール部分に文字を出力します。",
  "helpUrl": "https://example.com"
}]