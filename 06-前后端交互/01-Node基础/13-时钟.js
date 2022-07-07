const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let url = req.url;
    if (url === '/clock/index.html') {
        fs.readFile(path.join(__dirname, './clock/index.html'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('文件读取失败');
            }
            res.end(data);
        });
    }
    if (url === '/clock/index.css') {
        fs.readFile(path.join(__dirname, './clock/index.css'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('文件读取失败');
            }
            res.end(data);
        });
    }
    if (url === '/clock/index.js') {
        fs.readFile(path.join(__dirname, './clock/index.js'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('文件读取失败');
            }
            res.end(data);
        });
    }
});

server.listen(80, () => {
    console.log('服务器启动了，地址是：http://127.0.0.1');
});