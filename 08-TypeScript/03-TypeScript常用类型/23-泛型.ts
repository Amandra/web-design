class GenericNumber<Type> {
    defaultValue: Type;
    add: (x: Type, y: Type) => Type
}

const genericNumber = new GenericNumber<number>()
genericNumber.defaultValue = 10

