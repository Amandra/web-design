'use strict';

var _m = require('./m1');

var m1 = _interopRequireWildcard(_m);

var _m2 = require('./m2');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1);
// 引入分别暴露的模块+重命名
// 引入分别暴露的模块


console.log(_m.uname);
console.log(_m2.uname);
console.log(_m.age);
(0, _m.showUname)();
(0, _m.showAge)();