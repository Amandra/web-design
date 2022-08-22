var Person = /** @class */ (function () {
    // 构造函数，为类中的属性进行初始化
    function Person(age, gender) {
        this.gender = '男';
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.say = function (word) {
        console.log("\u6211\u7684\u5E74\u9F84\u662F ".concat(this.age, "\uFF0C\u6211\u7684\u6027\u522B\u662F ").concat(this.gender, "\uFF0C\u6211\u8981\u8BF4\uFF1A").concat(word));
    };
    return Person;
}());
var person = new Person(18, '男');
console.log(person);
person.say('呵呵');
