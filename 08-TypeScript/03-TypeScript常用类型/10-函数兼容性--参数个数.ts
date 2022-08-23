type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let f1: F1;
let f2: F2 = f1

const arr = [1, 2, 3, 4]
arr.forEach((item) => {
})

arr.forEach((item, index) => {
})


arr.forEach((item, index, array) => {
})
