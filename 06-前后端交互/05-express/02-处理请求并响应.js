// 导入 express
const express = require('express');
// 创建 WEB 服务器
const app = express();
// 监听 GET 请求
app.get('/user', (req, res) => {
    // req.query 默认是一个空对象
    // 客户端使用 ?name=zs&age=18 这种查询字符串的形式，发送到服务器的参数
    // 可以通过 req.query 对象访问到
    console.log(req.query);
    const {name, age} = req.query;
    console.log(name); // zs
    console.log(age); // 18
    // 向客户端发送 JSON 对象
    res.send({name: '张三', age: 18});
});
// 获取动态参数
app.get('/user/delete/:id', (req, res) => {
    // req.params 默认是一个空对象
    // 里面存放着通过 : 动态匹配的参数值
    console.log(req.params); // {id: "1"}
    let {id} = req.params;
    console.log(id); // 1

    res.send('删除成功');
});
// 监听 POST 请求
app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功');
});
// 调用 app.listen(端口，启动成功后的回调函数) ，启动服务器。
app.listen(80, () => {
    console.log('Express 服务器启动了，请求地址是：http://127.0.0.1');
});