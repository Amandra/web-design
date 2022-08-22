let str = 'Hello TS';
const str2 = 'Hello TS';
const str3: 'Hello TS' = 'Hello TS';
let age: 18 = 18;

// 字面量类型配合联合类型
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    console.log(direction);
}