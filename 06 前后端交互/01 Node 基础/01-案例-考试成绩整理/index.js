const fs = require('fs');

fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('读取文件失败~' + err.message);
    }

    console.log('文件读取成功：' + data);

    // 将成绩的数据，按照空格分割
    let dataArr = data.split(' ');

    // 循环分割的数组，对每一项数据进行字符串的替换操作
    let dataNewArr = dataArr.map(value => value.replace('=', '：'));

    // 将新数组中的每一个元素进行合并，得到一个新的字符串
    let newStr = dataNewArr.join('\r\n');

    fs.writeFile('./成绩-ok.txt', newStr, (wErr) => {
        if (wErr) {
            return console.log('文件写入失败：' + wErr.message);
        }

        console.log('文件写入成功');
    });
});
