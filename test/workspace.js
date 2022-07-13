

Promise.all(
    ["../build/workspace.xml", "../build/toolbox.xml"].map(async file => {
        return fetch(file).then(
            (res) => {
                return res.text();
            }
        );
    })
).then((xmls) => {
    xmls.forEach((xml) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(xml, "application/xml");
        document.body.appendChild(doc.documentElement);
    });
}).then(() => {
    /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
    var toolbox = document.getElementById("toolbox");

    var options = { 
        toolbox : toolbox, 
        collapse : true, 
        comments : true, 
        disable : false, 
        maxBlocks : Infinity, 
        trashcan : true, 
        horizontalLayout : false, 
        toolboxPosition : 'start', 
        css : true, 
        media: 'https://unpkg.com/blockly@latest/media/',
        rtl : false, 
        scrollbars : true, 
        sounds : true, 
        oneBasedIndex : true, 
        grid : {
            spacing : 20, 
            length : 1, 
            colour : '#888', 
            snap : false
        }, 
        zoom : {
            controls : true, 
            wheel : true, 
            startScale : 1, 
            maxScale : 3, 
            minScale : 0.3, 
            scaleSpeed : 1.2
        }
    };

    /* Inject your workspace */
    var workspace = Blockly.inject('jikko', options);

    /* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

    /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
    var workspaceBlocks = document.getElementById("workspaceBlocks");

    /* Load blocks to workspace. */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
});

const code = () => {
	Blockly.JavaScript.workspaceToCode();
}

fetch('../1-logic/logic_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../2-loops/loops_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../3-math/math_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../4-string/string_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../5-list/list_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../6-color/color_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../7-sprite/sprite_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });

fetch('../8-sound/sound_def.js')
    .then(response => response.json())
    .then(data => {
        Blockly.defineBlocksWithJsonArray(data);
    });