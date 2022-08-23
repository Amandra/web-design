interface Person {
    name: string;
}

interface Contact {
    phone: string
}

// 交叉类型：用于组合多个类型为一个类型
type PersonDetail = Person & Contact

let person: PersonDetail = {
    name: '许大仙',
    phone: '+11234567890'
}
