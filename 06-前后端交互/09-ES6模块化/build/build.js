(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _m = require('./m1');

console.log(_m.uname);
console.log(_m.age);
(0, _m.showUname)();
(0, _m.showAge)();
},{"./m1":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
