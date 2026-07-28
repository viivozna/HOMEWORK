'use strict'

// 3.2

const firstMethod = 1234567890123456789012n
const secondMethod = BigInt('123456789012345678890123')

console.log(typeof firstMethod)
console.log(typeof secondMethod)

// 3.3

let maxBigInt = BigInt(Number.MAX_SAFE_INTEGER)
console.log(maxBigInt)
console.log(maxBigInt + 1n)
console.log(maxBigInt + 2n)
console.log(maxBigInt + 3n)
console.log(maxBigInt + 4n)
console.log(maxBigInt + 5n)

// BigInt зберігає точність для великих чисел, на відміну від Number.

// 3.4

const a = 10n
const b = 10 

console.log(a === b)
console.log(a == b)
console.log(typeof a)
console.log(typeof b)

// перше порівняння строге і перевіряє типи даних тому false, а друге не строге і перевіряє тільки значення тому виходе 10 = 10

// 3.5

// const mixType = 10n + 5 // TypeError: Invalid mix of BigInt and other type in addition.
