// 同时指定参数和返回值类型
const add: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
};

let sum = add(1, 2);
console.log(sum);

// 类似于下面的这种形式：
type CustomFunctionType = (num1: number, num2: number) => number;
const add1: CustomFunctionType = (num1, num2) => {
    return num1 + num2;
};

let sum2 = add1(1, 2);
console.log(sum2);

