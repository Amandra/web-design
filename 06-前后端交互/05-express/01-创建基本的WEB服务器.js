// 导入 express
const express = require('express');
// 创建 WEB 服务器
const app = express();
// 调用 app.listen(端口，启动成功后的回调函数) ，启动服务器。
app.listen(80, () => {
    console.log('Express 服务器启动了，请求地址是：http://127.0.0.1');
});