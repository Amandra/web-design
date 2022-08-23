// 创建一个函数来获取对象中属性的值
function getProp(obj, key) {
    return obj[key];
}
var obj = {
    name: '许大仙',
    age: 18
};
// 调用函数
console.log(getProp(obj, 'name'));
