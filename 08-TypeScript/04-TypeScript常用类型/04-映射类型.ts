type Props = { a: number; b: number; c: number }

type Type = {
    [Key in keyof Props]: number
}
