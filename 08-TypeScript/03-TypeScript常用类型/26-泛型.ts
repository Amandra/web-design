interface Props {
    id: string,
    title: string,
    children: number[]
}

// Pick 从 Type 中选择一组属性来构造新类型
type PickProps = Pick<Props, 'id' | 'title'>

let obj: PickProps = {id: "001", title: "中国人"}

console.log(obj)
