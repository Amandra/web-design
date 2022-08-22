// 声明一个类型别名
type customeArray = (number | string)[];
// 使用类型别名
let arr: customeArray = [1, 2, 3, 'a'];
let arr2: customeArray = [2, 'b', 3, 'a'];

console.log(arr);
console.log(arr2);
