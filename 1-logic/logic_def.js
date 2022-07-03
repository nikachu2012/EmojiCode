[{
  "type": "if",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency/48/000000/split.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "formula"
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
      "type": "input_statement",
      "name": "true"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "条件分岐ができます。",
  "helpUrl": "https://example.com"
},
{
  "type": "if_else",
  "message0": "%1 %2 %3 %4 %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency/48/000000/split.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "formula"
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
      "type": "input_statement",
      "name": "true"
    },
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/delete-sign.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_statement",
      "name": "false"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "条件分岐ができます。",
  "helpUrl": "https://example.com"
},
{
  "type": "equals_return_boolean",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "a",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "select-equal",
      "options": [
        [
          {
            "src": "https://img.icons8.com/color/48/000000/equal-sign.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "equals"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/not-equal.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "not-equal"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/less-than.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "less-than"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/less-or-equal.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "less-or-equal-than"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/more-than.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "more-than"
        ],
        [
          {
            "src": "https://img.icons8.com/color/48/000000/more-or-equal.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "more-or-equal-than"
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
  "output": "Boolean",
  "colour": 210,
  "tooltip": "数字の比較ができます",
  "helpUrl": "https://example.com/"
},
{
  "type": "not",
  "message0": "not %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Boolean"
    }
  ],
  "output": "Boolean",
  "colour": 210,
  "tooltip": "判定を逆にします。",
  "helpUrl": "https://example.com"
},
{
  "type": "and_or_return_boolean",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "a",
      "check": "Boolean"
    },
    {
      "type": "field_dropdown",
      "name": "and_or",
      "options": [
        [
          "かつ",
          "and"
        ],
        [
          "または",
          "or"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 210,
  "tooltip": "かつ、またはの判定ができます",
  "helpUrl": "https://example.com/"
},
{
  "type": "true_false_return",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "truefalse",
      "options": [
        [
          {
            "src": "https://img.icons8.com/material-outlined/48/000000/filled-circle--v2.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "true"
        ],
        [
          {
            "src": "https://img.icons8.com/material-outlined/48/000000/delete-sign.png",
            "width": 16,
            "height": 16,
            "alt": "*"
          },
          "false"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 210,
  "tooltip": "判定を逆にします。",
  "helpUrl": "https://example.com"
},
{
  "type": "null",
  "message0": "何もない",
  "output": "Boolean",
  "colour": 210,
  "tooltip": "何もない(null)を返します。",
  "helpUrl": "https://example.com"
},
{
  "type": "test",
  "message0": "%1 %2 %3 %4 %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency/48/000000/test.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "test",
      "check": "Boolean"
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
      "type": "input_value",
      "name": "if true",
      "check": "Boolean"
    },
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/delete-sign.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "if false",
      "check": "Boolean"
    }
  ],
  "output": "Boolean",
  "colour": 210,
  "tooltip": "何もない(null)を返します。",
  "helpUrl": "https://example.com"
}]