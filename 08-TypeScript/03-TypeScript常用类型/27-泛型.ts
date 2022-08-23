type RecordType = Record<'a' | 'b' | 'c', string[]>

let obj: RecordType = {
    a: ['1'],
    b: ['1', '2'],
    c: ['1', '2', '3']
}

console.log(obj)
