var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eat = function () {
        console.log('我们每个人都需要吃饭');
    };
    return Person;
}());
var person = new Person('张三');
person.eat();
console.log(person);
