/*

文言
https://github.com/wenyan-lang/wenyan

online IDE
https://ide.wy-lang.org/

standard lib
https://github.com/wenyan-lang/wenyan/wiki/Standard-Library-Cheatsheet

文法
https://github.com/wenyan-lang/wenyan/wiki/Syntax-Cheatsheet

記事
https://spectrum.ieee.org/tech-talk/computing/software/classical-chinese?platform=hootsuite
https://qiita.com/GandT/items/920af538c0a405199815

*/

const { js2wy } = require('wenyanizer');
//const { js2wy } = require('../../lang/wenyanizer/dist/');
const fs = require("fs");

//const fn = "../Geo3x3/simple_geo3x3.js"; // ng
//const fn = "test.js";
const fn = "Geo3x3_encode_zh.js";
//const fn = "Geo3x3_decode_zh.js";
const s = fs.readFileSync(fn, "utf-8");
const ws = js2wy(s);
const ws2 = ws.replace(/吾有一數。曰又。/g, "吾有一數。曰零。");
//const ws2 = ws;

//             乃得  Math.floor(_a0,)
// Math.floor = 取底
/*
コメント消した
ヘルパー関数を中に映した
下記を加えた
    吾嘗觀「「算經」」之書。
    方悟「取底」之義。
Math.floorの定義を消した
取底に変更した
    */

//console.log(s);
console.log(ws2);
