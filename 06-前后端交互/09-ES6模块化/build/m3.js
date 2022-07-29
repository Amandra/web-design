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