// 对象类型
interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

type F2 = (p: Point2D) => void;
type F3 = (p: Point3D) => void;

let f2: F2;
let f3: F3;

f3 = f2;



