import * as m1 from './m1'; // 引入【分别暴露】+打包引入
import {age, showAge, showUname, uname} from './m1'; // 引入【分别暴露】的模块
import {uname as name} from './m2'; // 引入【分别暴露】的模块+重命名
import * as m3 from './m3'; // 引入统一暴露的模块
import {person, school, work} from './m3'; // 引入统一暴露的模块

console.log(m1);
console.log(m3);
console.log(school);
console.log(person);
work();

console.log(uname);
console.log(name);
console.log(age);
showUname();
showAge();
