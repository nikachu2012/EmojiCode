[{
  "type": "list_create",
  "message0": "リストの作成",
  "inputsInline": true,
  "output": "Array",
  "colour": 260,
  "tooltip": "リストを作成します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_push",
  "message0": "%1 を %2 %3 に追加する",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number"
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "リストを作成します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_delete",
  "message0": "%1 の %2 %3 から %4 %5 個を削除する",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number"
      ]
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
      "name": "kosuu",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "リストを作成します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_all_delete",
  "message0": "%1 のすべてを削除",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "リストを作成します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_insert",
  "message0": "%1 の %2 %3 番目に %4 %5 を挿入する",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_dummy"
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
      "type": "input_value",
      "name": "data",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "リストの指定番目にテキストを挿入します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_replace",
  "message0": "%1 の %2 %3 番目に %4 %5 で置き換えする",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_dummy"
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
      "type": "input_value",
      "name": "value",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "リストの指定番目を置き換えします。",
  "helpUrl": "https://example.com"
},
{
  "type": "list_index",
  "message0": "%1 の %2 %3 番目",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "index",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "String"
  ],
  "colour": 260,
  "tooltip": "リストの指定番目を取得します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_str_index",
  "message0": "%1 の中の %2 %3 の場所",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "valuie",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 260,
  "tooltip": "リストに指定文字が入っている場所を取得します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_length",
  "message0": "%1 の長さ",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 260,
  "tooltip": "リストの長さを取得します",
  "helpUrl": "https://example.com"
},
{
  "type": "list_boolean_insert",
  "message0": "%1 の中に %2 %3 が入っているか",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 260,
  "tooltip": "リストに指定文字が入っている場所を取得します",
  "helpUrl": "https://example.com"
}]