// 导入
const custom = require('./01-custom');
// 输出的是 {} 对象，意思就是无法在 test.js 中访问 01-custom.js 中定义的变量和函数
console.log(custom);