### 安装

```shell
npm install xudaxian-utils
```

### 导入

```js
const xudaxian = require('xudaxian-utils');

```

### 格式化时间

```js
const dtStr = xudaxian.dateFormat(new Date())
console.log(dtStr)
```

### 转义 HTML

```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = xudaxian.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)

```

### 还原 HTML

```js
// 待还原的 HTML 字符串
const str2 = xudaxian.htmlUnEscape(str)
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)

```