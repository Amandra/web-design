class Person {
    age: number;
    gender = '男';

    // 构造函数，为类中的属性进行初始化
    constructor(age: number, gender: string) {
        this.age = age;
        this.gender = gender;
    }

    say(word: string): void {
        console.log(`我的年龄是 ${this.age}，我的性别是 ${this.gender}，我要说：${word}`);
    }
}

const person = new Person(18, '男');
console.log(person);
person.say('呵呵');
