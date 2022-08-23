function fn<Type>(value: Type): Type {
    return value;
}

const num = fn<number>(1);
console.log(num)

const str = fn<string>('a')
console.log(str)
