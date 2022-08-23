// 创建泛型函数
function fn<Type>(value: Type): Type {
    return value;
}

// 简化调用泛型函数
let num = fn(1);
console.log(num)

// 简化调用泛型函数
let str = fn('a')
console.log(str)
