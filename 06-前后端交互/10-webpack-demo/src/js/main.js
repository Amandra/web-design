/*
* main.js 是 webpack 的入口，所有外部文件（js、json、css、less等）都需要在这里引入使用
*/
import {add, sub} from './m1';
import {age, name} from './m2';
import m3 from './m3';

console.log(add(1, 2));
console.log(sub(1, 2));

console.log(name);
console.log(age);
console.log(m3.name);
console.log(m3.address);
console.log(m3.subjects);