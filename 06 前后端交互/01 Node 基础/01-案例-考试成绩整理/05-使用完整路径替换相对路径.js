const fs = require('fs');


fs.readFile('./demo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('读取文件失败：' + err.message);
    }

    console.log('读取文件成功');
});