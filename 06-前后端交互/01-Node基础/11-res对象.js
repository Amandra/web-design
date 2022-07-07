// ① 导入 http 模块
const http = require('http');
// ② 创建 WEB 服务器实例。
const server = http.createServer();
// ③ 为服务器实例绑定 request 事件，监听客户端的请求。
server.on('request', (req, res) => {
    // res 是响应对象，它包含了和服务器相关的数据和属性
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const str = `您的请求是 ${req.url} ，您的请求方法的类型是 ${req.method}`;
    // res.end() 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str);
});
// ④ 启动服务器。
server.listen(8080, () => {
    console.log('服务器启动了，地址是：http://127.0.0.1:8080');
});
