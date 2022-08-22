// 定义枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 直接使用枚举名称作为类型注解
function changeDirection(direction: Direction): void {
    console.log(direction);
}

// 使用枚举
changeDirection(Direction.Left);