[{
  "type": "sound_play",
  "message0": "%1 %2 を再生",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material/48/000000/low-volume--v1.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "soundName",
      "check": "sound_ID"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "音声を再生します",
  "helpUrl": "https://example.com"
},
{
  "type": "sound_pause",
  "message0": "%1 音を止める",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material/48/000000/no-audio--v1.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "音声を止めます。",
  "helpUrl": "https://example.com"
},
{
  "type": "sound_effect_select",
  "message0": "%1 %2 に %3 の効果を %4 %5 にする",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material/48/000000/low-volume--v1.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "soundName",
      "check": "sound_ID"
    },
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "ピッチ",
          "pitch"
        ],
        [
          "リバーブ",
          "reverve"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "effect_level",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "音声に効果をつけます。",
  "helpUrl": "https://example.com"
},
{
  "type": "sound_effect_dutu",
  "message0": "%1 %2 に %3 の効果を %4 %5 づつ変える",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material/48/000000/low-volume--v1.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "soundName",
      "check": "sound_ID"
    },
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "ピッチ",
          "pitch"
        ],
        [
          "リバーブ",
          "reverve"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "effect_level",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "音声に効果をつけます。",
  "helpUrl": "https://example.com"
},
{
  "type": "sound_volume_select",
  "message0": "%1 音量を %2 %3 %%にする",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material/48/000000/low-volume--v1.png",
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
      "name": "volume",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "音量を変更します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sound_volume_dutu",
  "message0": "%1 音量を %2 %3 %%づつ変える",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/material/48/000000/low-volume--v1.png",
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
      "name": "volume",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "音量を変更します。",
  "helpUrl": "https://example.com"
},
{
  "type": "sound_tone",
  "message0": "%1 %2 %3 の音を %4 分音符鳴らす",
  "args0": [
    {
      "type": "field_image",
      "src": "https://img.icons8.com/ios-filled/50/000000/piano.png",
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
      "name": "onkai"
    },
    {
      "type": "field_dropdown",
      "name": "select",
      "options": [
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "4",
          "4"
        ],
        [
          "8",
          "8"
        ],
        [
          "16",
          "16"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "指定トーンの音を入れます",
  "helpUrl": "https://example.com"
}]