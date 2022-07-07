module.exports.username = '许大仙';

module.exports.sayHi = function () {
    console.log('大家好');
};

// 让 module.exports 指向一个全息的对象
module.exports = {
    nickname: '你大爷',
    sayHello: function () {
        console.log('是的吗？');
    }
};

// console.log(module.exports);