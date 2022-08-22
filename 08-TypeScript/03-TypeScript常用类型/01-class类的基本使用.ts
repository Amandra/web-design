class Person {
    age: number;
    gender = '男';
    
    // 构造函数，为类中的属性进行初始化
    constructor(age: number, gender: string) {
        this.age = age;
        this.gender = gender;
    }
}

const person = new Person(18, '男');
console.log(person);
