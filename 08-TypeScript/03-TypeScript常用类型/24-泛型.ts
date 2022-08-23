interface Props {
    id: string,
    children: number[]
}

// PartialProps 和 Props 的结构相同，但是属性都是可选的
type PartialProps = Partial<Props>

const obj: PartialProps = {
    id: '1'
}
console.log(obj)

const obj2: PartialProps = {
    children: [1, 2, 3]
}
console.log(obj2)

const obj3: PartialProps = {
    id: '001',
    children: [1, 2, 3]
}
console.log(obj3)
