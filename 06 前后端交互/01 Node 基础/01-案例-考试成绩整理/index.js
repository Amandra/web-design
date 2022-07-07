const fs = require('fs');

fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('文件不存在' + err.message);
    }

    console.log('文件读取成功：' + data);

    
});
