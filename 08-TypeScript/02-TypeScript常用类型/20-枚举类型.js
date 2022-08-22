// 定义枚举
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// 直接使用枚举名称作为类型注解
function changeDirection(direction) {
    console.log(direction);
}
// 使用枚举
changeDirection(Direction.Left);
