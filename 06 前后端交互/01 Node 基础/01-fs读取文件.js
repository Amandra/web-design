// 导入 fs 模块，来操作文件
const fs = require('fs');

// 调用 fs.readFile() 方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时的采用的编码格式，一般默认为 utf-8
// 参数3：回调函数，拿到读取失败和成功的结果
fs.readFile('./demo.txt', 'utf-8', function (err, data) {
    // 打印失败的结果 ，如果读取成功，则 err 为 null 。
    console.log(err); // null
    console.log('---------');
    // 打印成功的结果
    console.log(data);
});
