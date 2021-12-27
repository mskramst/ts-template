"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Player_1 = require("./Player");
BPlayer;
from;
'./BaseballPlayer';
let currentTime = {
    hr: 10,
    min: 10,
    sec: 10
};
const bp = new BaseballPlayer('bob', 'feller', 22, 'p');
//console.log(bp.getFullName())
console.log((0, User_1.Timer)(10, 10, 10).getTime());
const p = (0, Player_1.createPlayer)("Mikey", "Newman", 11);
console.log(p.getFullName());
console.log("Adding .. 1 + 3: " + (0, Player_1.add)(1, 3));
//function CreatePlayer(fn: string, ln: string, playerNum: number) {
//  return {
//    playerNum: playerNum,
//    getNum : (msgStr:string) => getNum(playerNum, msgStr),
//    getInfo : (msgStr:string) => getInfo(fn, ln, msgStr)
//  };
//}
//
//function getNum(playerNum: number, msgStr:string):string {
//  return `${msgStr}, my player num is ${playerNum}.`;
//}
//
//function getInfo(fn:string, ln:string, msgStr:string):string {
//  return `${msgStr}, I am ${fn} ${ln}.`
//}
//
//var p1 = CreatePlayer('andruw', 'jones', 12)
//
//console.log(p1.getInfo('hi'))
//console.log(p1.getNum('what?'))
//
const player = {
    firstName: 'Chipper',
    lastName: 'Jones',
    team: 'Braves'
};
const stats = {
    homeruns: 37,
    rbi: 102,
    avg: .303
};
const chipper = Object.assign(player, stats);
console.log(chipper);
