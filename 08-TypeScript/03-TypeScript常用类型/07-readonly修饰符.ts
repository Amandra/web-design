class Person {
    readonly age: number = 18;

    constructor(age: number) {
        this.age = age;
    }
}

const person = new Person(19);
console.log(person.age)
