console.log(typeof 'Hello TS'); // string

let p = { x: 1, y: 1 };
function format(point: { x: number; y: number; }) {
    console.log(p);
}
format(p);
