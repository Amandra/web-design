interface Props {
    id: string,
    children: number[]
}

// ReadonlyProps 和 Props 的结构相同，但是属性都是只读的
type ReadonlyProps = Readonly<Props>

let obj: ReadonlyProps = {
    id: "001",
    children: [1, 2, 3]
}

console.log(obj.id);


