[{
  "type": "color_selector",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/000000/color-palette.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_colour",
      "name": "select",
      "colour": "#ff0000"
    }
  ],
  "output": "String",
  "colour": 20,
  "tooltip": "色をパレットから選ぶことができます。",
  "helpUrl": "https://example.com"
},
{
  "type": "color_random",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/000000/color-palette.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-random-interface-kiranshastry-gradient-kiranshastry.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "output": "String",
  "colour": 20,
  "tooltip": "色をランダムに指定します。",
  "helpUrl": "https://example.com"
},
{
  "type": "color_option",
  "message0": "%1 赤 %2 %3 青 %4 %5 緑 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/color/48/000000/color-palette.png",
      "width": 16,
      "height": 16,
      "alt": "色",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "field_image",
      "src": "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
      "width": 16,
      "height": 16,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "field_image",
      "src": "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
      "width": 16,
      "height": 16,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "output": "String",
  "colour": 20,
  "tooltip": "色を細かく数字で指定できます。",
  "helpUrl": "https://example.com"
}]