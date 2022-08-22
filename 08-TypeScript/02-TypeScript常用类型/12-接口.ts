interface IPerson {
    name: string;
    age: number;
    say: () => void;
}

let zhangsan: IPerson = {
    name: '张三',
    age: 18,
    say() {
        console.log(`大家好，我是 ${this.name}`);
    }
};

console.log(zhangsan);
zhangsan.say();

let lisi: IPerson = {
    name: '李四',
    age: 21,
    say() {
        console.log(`大家好，我是 ${this.name}`);
    }
};

console.log(lisi);
lisi.say();
