const fs = require('fs');

fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('读取文件失败~' + err.message);
    }

    console.log('文件读取成功：' + data);


});
