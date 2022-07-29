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