// 可选参数
function defSlice(start?: number, end?: number): void {
    console.log(`起始索引：${start}，结束索引：${end}`);
}

defSlice();
defSlice(1);
defSlice(1, 2);
