import React from "react";

type Props = { name: string, age?: number }

const Hello = ({name, age = 18}: Props) => {

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('button', e)
    };

    return (
        <div>
            <div>大家好，我的名字是 {name} ，我今年 {age} 岁</div>
            <button onClick={onClick}>
                点赞
            </button>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log('input', e)
            }}/>
        </div>
    )
}

export default Hello
