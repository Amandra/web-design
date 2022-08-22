// 接口
interface IPerson {
    name: string;
    age: number;
    sayHi(): void;
}

const person: IPerson = {
    name: '许大仙',
    age: 18,
    sayHi() {
        console.log(`大家好，我是 ${this.name}`);

    },
};

console.log('person', person);

// 类型别名
type defPerson = {
    name: string;
    age: number;
    sayHi(): void;
};

const person1: defPerson = {
    name: '许大仙',
    age: 18,
    sayHi() {
        console.log(`大家好，我是 ${this.name}`);

    },
};

console.log('person1', person1);

// 类型别名
type numStr = number | string;

let str: numStr = '大家好，我是许大仙';
console.log(str);


