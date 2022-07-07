const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    let url = req.url;
    fs.readFile(path.join(__dirname, url), 'utf-8', (err, data) => {
        if (err) {
            return res.end('404 Not Found');
        }
        res.end(data);
    });
});

server.listen(80, () => {
    console.log('服务器启动了，地址是：http://127.0.0.1');
});