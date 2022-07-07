// 在外界使用 require 导入一个自定义模块的时候，得到的成员就是被导入模块的 module.exports 所指向的对象
const m = require('./06-demo');

console.log(m); // { nickname: '你大爷', sayHello: [Function: sayHello] }
