// 创建一个函数来获取对象中属性的值
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

const obj = {
    name: '许大仙',
    age: 18
}

// 调用函数
console.log(getProp(obj, 'name'));

