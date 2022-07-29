'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showUname = showUname;
exports.showAge = showAge;
/* 使用分别暴露 */
var uname = exports.uname = '许大仙';
var age = exports.age = 18;

function showUname() {
    console.log(uname);
}

function showAge() {
    console.log(age);
}