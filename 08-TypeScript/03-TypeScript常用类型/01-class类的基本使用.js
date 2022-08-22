var Person = /** @class */ (function () {
    // 构造函数，为类中的属性进行初始化
    function Person(age, gender) {
        this.gender = '男';
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var person = new Person(18, '男');
console.log(person);
