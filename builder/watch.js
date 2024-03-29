//require
var chokidar = require("chokidar");
const glob = require('glob');
const fs = require('fs');

//chokidarの初期化
var watcher = chokidar.watch('../', {
    persistent: true
});

//イベント定義
watcher.on('ready', function () {

    //準備完了
    console.log("ready watching...");

    //ファイルの追加
    watcher.on('add', function (path) {
        console.log(path + " added.");
        build();
    });

    //ファイルの編集
    watcher.on('change', function (path) {
        console.log(path + " changed.");
        build();
    });
});

build = () => {
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
*/\n`;
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
*/\n`;
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

}

