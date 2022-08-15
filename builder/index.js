const glob = require('glob');
const fs = require('fs');

glob('../**/*', (err, files) => {

        let fileList = [];
        files.forEach(file => {
            if (!/^..\/(?:build|builder|defaultFunctions|test|\..*)/.test(file) && /^..\/.*\/.*_def\..*/.test(file)) {
                fileList.push(file)
            }
        });

        let alldata =
            `/* 
    EmojiCode Block Define
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: ${new Date()}
*/\n

import Blockly from 'blockly'\n`;
        fileList.forEach(element => {
            try {
                alldata += `${fs.readFileSync(element)} \n`;
            } catch (err) {
                console.log(err)
            }
        });


        fs.writeFile('../emojicode_def.js', alldata, function (err, result) {
            if (err) console.log('error', err);
        });
    });

    glob('../**/*', (err, files) => {

        let fileList = [];
        files.forEach(file => {
            if (!/^..\/(?:build|builder|defaultFunctions|test|\..*)/.test(file) && /^..\/.*\/.*_stub\..*/.test(file)) {
                fileList.push(file)
            }
        });

        let alldata =
            `/* 
    EmojiCode Block Stub
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: ${new Date()}
*/\n

import Blockly from 'blockly'\n`;
        fileList.forEach(element => {
            try {
                alldata += `${fs.readFileSync(element)} \n`;
            } catch (err) {
                console.log(err)
            }
        });


        fs.writeFile('../emojicode_stub.js', alldata, function (err, result) {
            if (err) console.log('error', err);
        });
    });
