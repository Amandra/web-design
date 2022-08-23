// 类型兼容性
// const arr = ['a', 'b', 'c'];

// arr.forEach(item => { });
// arr.forEach((item, index) => { });
// arr.forEach((item, index, array) => { });

class Point { x: number; y: number; };
class Point2D { x: number; y: number; };

const p: Point = new Point2D();