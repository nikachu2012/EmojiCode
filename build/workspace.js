Blockly.defineBlocksWithJsonArray([{
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
	"message0": "%1 %2 が %3 になるまで %4 %5",
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
			"type": "field_dropdown",
			"name": "boolean",
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
			"check": "String"
		},
		{
			"type": "input_dummy"
		},
		{
			"type": "input_value",
			"name": "end",
			"check": "String"
		},
		{
			"type": "input_dummy"
		},
		{
			"type": "input_value",
			"name": "dutu",
			"check": "String"
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
}])
Blockly.defineBlocksWithJsonArray([{
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
  }])


/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
	toolbox: toolbox,
	collapse: true,
	comments: true,
	disable: true,
	maxBlocks: Infinity,
	trashcan: true,
	horizontalLayout: false,
	toolboxPosition: 'start',
	css: true,
	media: 'https://unpkg.com/blockly@latest/media/',
	rtl: false,
	scrollbars: true,
	sounds: true,
	oneBasedIndex: true,
	grid: {
		spacing: 20,
		length: 1,
		colour: '#888',
		snap: false
	},
	zoom: {
		controls: true,
		wheel: true,
		startScale: 1,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2
	}
};

/* Inject your workspace */
var workspace = Blockly.inject('jikko', options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);