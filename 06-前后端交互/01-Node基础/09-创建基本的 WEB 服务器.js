// ① 导入 http 模块
const http = require('http');
// ② 创建 WEB 服务器实例。
const server = http.createServer();
// ③ 为服务器实例绑定 request 事件，监听客户端的请求。
server.on('request', (req, res) => {
    console.log('服务器正在监听客户端的请求');
});
// ④ 启动服务器。
server.listen(8080, () => {
    console.log('服务器启动了，地址是：http://127.0.0.1:8080');
});
