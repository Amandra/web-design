interface Point2D {
    x: number;
    y: number;
}

// 继承
interface Point3D extends Point2D {
    z: number;
}

const point: Point3D = {
    x: 1,
    y: 2,
    z: 3
};

console.log(point);
