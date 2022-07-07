console.log(exports === module.exports); // true

exports.username = '许大仙';
exports.sayHi = function () {
    console.log('你好啊');
};

console.log(exports); // { username: '许大仙', sayHi: [Function (anonymous)] }
console.log(module.exports); // { username: '许大仙', sayHi: [Function (anonymous)] }