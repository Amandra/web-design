// 定义枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 直接使用枚举名称作为类型注解
function changeDirection(direction) {
    console.log(direction);
}
// 使用枚举
changeDirection(Direction.Left);
