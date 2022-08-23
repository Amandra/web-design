// 创建泛型函数
function id<Type>(value: Type): Type {
    // console.log(value.length) // 报错
    return value;
}

// 调用泛型函数
id('a')


