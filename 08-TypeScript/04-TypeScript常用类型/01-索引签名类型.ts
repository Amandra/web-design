interface AnyObject {
    // 索引签名类型
    [key: string]: number
}

let obj: AnyObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

console.log(obj)
