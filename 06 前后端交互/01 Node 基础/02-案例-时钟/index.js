/*
* ① 创建两个正则表达式，分别用来匹配 style 和 script 标签。
* ② 使用 fs 模块，读取需要被处理的 HTML 文件。
* ③ 自定义 resolveCSS 方法，来写入 index.css 样式文件。
* ④ 自定义 resolveJS 方法，来写入 index.js 脚本文件。
* ⑤ 自定义 resolveHTML 方法，来写入 index.html 文件。
*/
// 导入模块
const fs = require('fs');
const path = require('path');
// 创建正则表达式
const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/;

function resolveCSS(data) {
    // 使用正则表达式提取页面中的 <style></style> 标签
    const content = styleReg.exec(data);
    // 去掉<style> 和 </style>
    const newCSS = content[0].replace('<style>', '').replace('</style>', '');
    // 将提取的 css 样式，写入到 index.css 文件中
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if (err) {
            return console.log('文件写入失败' + err.message);
        }
        console.log('文件写入成功');
    });
}

function resolveJS(data) {

}

function resolveHTML(data) {

}

// 使用 fs 模块读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
    if (err) {
        return console.log('文件读取失败');
    }
    // 读取成功后，调用对应的方法，拆解出 css 、js 和 html
    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
});
