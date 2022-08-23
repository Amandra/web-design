interface ILength {
    length: number
}

// 创建泛型函数添加约束，表示传入的类型必须具有 length 属性
function id<Type extends ILength>(value: Type): Type {
    console.log(value.length)
    return value
}

// 传入的实参（如：数组）只要有length属性即可
console.log(id([1, 2, 3]));
