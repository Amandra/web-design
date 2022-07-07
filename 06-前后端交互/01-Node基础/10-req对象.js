// ① 导入 http 模块
const http = require('http');
// ② 创建 WEB 服务器实例。
const server = http.createServer();
// ③ 为服务器实例绑定 request 事件，监听客户端的请求。
server.on('request', (req, res) => {
    // req 是请求对象，包含了和客户端请求相关的数据和属性
    // req.url 客户端请求的 URL
    // req.method 客户端请求的 method 类型
    console.log(`您的请求是 ${req.url} ，您的请求方法的类型是 ${req.method}`);
});
// ④ 启动服务器。
server.listen(8080, () => {
    console.log('服务器启动了，地址是：http://127.0.0.1:8080');
});
