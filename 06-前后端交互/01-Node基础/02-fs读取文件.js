// 导入 fs 模块，来操作文件
const fs = require('fs');

// 调用 fs.readFile() 方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时的采用的编码格式，一般默认为 utf-8
// 参数3：回调函数，拿到读取失败和成功的结果
fs.readFile('./demo.txt', 'utf-8', function (err, data) {

    // 判断文件是否读取成功
    if (err) {
        return console.log('文件读取失败' + err.message);
    }

    console.log('文件读取成功，内容是：' + data);
});
