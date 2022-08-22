interface Speak {
    speak(): void;
}

// TS 中的类可以实现接口
class Person implements Speak {
    speak(): void {
        console.log('我们每个人都会说话');
    }
}

const person = new Person();
person.speak();