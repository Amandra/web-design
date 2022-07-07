const fs = require('fs');

// 使用完整路径来防止路径动态拼接的问题

fs.readFile(__dirname + '/demo.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('读取文件失败：' + err.message);
    }

    console.log('读取文件成功');
});