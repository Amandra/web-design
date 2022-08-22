// 数值类型的数组
let numArr: number[] = [1, 2, 3];
console.log(numArr);
// 字符串类型的数组
let strArr: string[] = ['a', 'b', 'c', 'd'];
let strArr2: Array<String> = ['a', 'b', 'c', 'd'];
console.log(strArr);
console.log(strArr2);
// boolean 类型的数组
let boolArr: boolean[] = [true, false];
console.log(boolArr);
// 联合类型的数组
let arr: (number | string)[] = [1, 2, 3, 'a'];
console.log(arr);