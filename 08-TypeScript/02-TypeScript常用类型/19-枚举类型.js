// 定义枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
    Direction[Direction["Right"] = 7] = "Right";
})(Direction || (Direction = {}));
// 直接使用枚举名称作为类型注解
function changeDirection(direction) {
    console.log(direction);
}
// 使用枚举
changeDirection(Direction.Left);
