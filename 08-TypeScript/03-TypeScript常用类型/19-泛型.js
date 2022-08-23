// 创建泛型函数
function id(value) {
    console.log(value.length);
    return value;
}
// 调用泛型函数
console.log(id([1, 2, 3]));
