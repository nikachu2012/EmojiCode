[{
  "type": "sprite_sayuu",
  "message0": "%1 %2 を %3 歩動かす",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトを動かします。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_rotate_right",
  "message0": "%1 %2 を %3 度回転",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/rotate-right.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "rotate",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトを右に回転します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_rotate_left",
  "message0": "%1 %2 を %3 度回転",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material-outlined/48/000000/rotate-left.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトを左に回転します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_move",
  "message0": "%1 %2 をx:  %3 y:  %4 にする",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトを動かします。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_move_seconds",
  "message0": "%1 %2 をx:  %3 y:  %4 に %5 秒で動かす",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-move-graphic-design-flat-flat-kendis-lasman.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトを指定秒数以内に動かします。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_rotate",
  "message0": "%1 を %2 度に向ける",
  "args0": [
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトの向きを変えます。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_move_xdake",
  "message0": "%1 %2 のx座標を %3 にする",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency-systems-filled/48/000000/x.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトのx座標を指定に変更します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_move_xdutu",
  "message0": "%1 %2 のx座標を %3 づつ動かす",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency-systems-filled/48/000000/x.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトのｘ座標を指定分づつ動かします。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_move_ydake",
  "message0": "%1 %2 のy座標を %3 にする",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency-systems-filled/48/000000/y.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトのy座標を指定に変更します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_move_ydutu",
  "message0": "%1 %2 のy座標を %3 づつ動かす",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency-systems-filled/48/000000/y.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトのｙ座標を指定分づつ動かします。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_end",
  "message0": "%1 は、もし端に着いたら跳ね返る",
  "args0": [
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "端に着いたら跳ね返るようにします。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_rotate_houhou",
  "message0": "%1 の回転方法を %2 のみにする",
  "args0": [
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "左右のみ",
          "left-right"
        ],
        [
          "回転しない",
          "none"
        ],
        [
          "自由に回転",
          "free"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "指定したスプライトの回転方向を変更します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_const_xpos",
  "message0": "%1 %2 のｘ座標",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency-systems-filled/48/000000/x.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 65,
  "tooltip": "指定したスプライトのｘ座標を取得します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_const_ypos",
  "message0": "%1 %2 のｙ座標",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/fluency-systems-filled/48/000000/y.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 65,
  "tooltip": "指定したスプライトのｙ座標を取得します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sprite_const_rotate",
  "message0": "%1 の向き",
  "args0": [
    {
      "type": "input_value",
      "name": "spriteName",
      "check": "sprite_ID"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 65,
  "tooltip": "指定したスプライトの向きを取得します。",
  "helpUrl": "https://example.com"
}]