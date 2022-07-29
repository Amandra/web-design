(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _m = require('./m1');

var m1 = _interopRequireWildcard(_m);

var _m2 = require('./m2');

var _m3 = require('./m3');

var m3 = _interopRequireWildcard(_m3);

var _m4 = require('./m4');

var _m5 = _interopRequireDefault(_m4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 移入默认暴露

// 引入统一暴露的模块
// 引入【分别暴露】的模块
console.log('m4', _m5.default); // 引入统一暴露的模块
// 引入【分别暴露】的模块+重命名
// 引入【分别暴露】+打包引入

console.log(m1);
console.log(m3);
console.log(_m3.school);
console.log(_m3.person);
(0, _m3.work)();

console.log(_m.uname);
console.log(_m2.uname);
console.log(_m.age);
(0, _m.showUname)();
(0, _m.showAge)();
},{"./m1":2,"./m2":3,"./m3":4,"./m4":5}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* 使用分别暴露，但是暴露了和 m1 重名的 uname */
var uname = exports.uname = '许仙';
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 统一暴露 */
var school = '家里蹲大学';

var person = {
    name: '许大仙', age: 18
};

function work() {
    console.log('工作');
}

// 【统一暴露】精简写法
// export {school, person, work};
// 【统一暴露】完整写法
exports.school = school;
exports.person = person;
exports.work = work;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露 -- 适用于只暴露一个数据
exports.default = {
    name: '二狗子',
    age: 5
};
},{}]},{},[1]);
