// 泛型接口
interface IdFun<Type> {
    id: (value: Type) => Type;
    ids: () => Type[];
}

let obj: IdFun<number> = {
    id(value) {
        return value;
    },
    ids() {
        return [1, 2, 3];
    }
}
