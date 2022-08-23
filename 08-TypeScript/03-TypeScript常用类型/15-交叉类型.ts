interface Point2D {
    x: number;
    y: number;
}

// 通过继承 Point3D 具有 x、y、z 属性
interface Point3D extends Point2D {
    z: number;
}

let p: Point3D = {
    x: 1,
    y: 2,
    z: 3
}
