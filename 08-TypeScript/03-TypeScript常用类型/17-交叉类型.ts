interface A {
    fn: (value: number) => string
}

interface B {
    fn: (value: string) => string
}

type C = A & B

