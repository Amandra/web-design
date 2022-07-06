// 导入 fs 模块，来操作文件
const fs = require('fs');
// 调用 fs.writeFile() 方法写入文件的内容
// 参数1：表示文件的存放路径
// 参数2：要写入的内容
// 参数3：回调函数
fs.writeFile('./test.txt', 'Node.js 你好', function (err) {
    console.log(err);
});
