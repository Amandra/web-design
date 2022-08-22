class Person {
    public name: string;

    constructor(name: string) {
        this.name = name
    }

    public eat() {
        console.log('我们每个人都需要吃饭')
    }
}

const person = new Person('张三');
person.eat();
console.log(person)
