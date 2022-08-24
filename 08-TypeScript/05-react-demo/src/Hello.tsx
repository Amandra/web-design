type Props = { name: string, age?: number }
// 简化语法
const Hello = ({name, age = 18}: Props) => {
    return (
        <div>你好，我的名字是：{name}，我的年龄是：{age}</div>
    )
}

export default Hello
