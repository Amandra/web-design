// 在一个自定义模块中，默认情况下，module.exports = {}

// 向 module.exports 对象上挂载 username 属性
module.exports.username = '张三';
// 向 module.exports 对象上挂载函数
module.exports.sayHi = function () {
    console.log('大家好');
};

console.log(module.exports);