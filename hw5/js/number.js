'use strict'

'use strict';

// Завдання 2.1

const firstNum = 5; // ціле додатне
const secondNum = -5; // ціле від'ємне
const thirdNum = 5.5; // число з плаваючою крапкою
const fourthNum = 1e11; // дуже велике число (100000000000)
const fifthNum = 1e-11; // дуже мале число (0.00000000001)
const sixthNum = 1_000_000_000_000; // велике число з роздільником _

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);
console.log(fifthNum);
console.log(sixthNum);

// Завдання 2.2 

'use strict';

// Завдання 2.2

const number = 50;
const zero = 0;
const text = "userName";

const positiveInf = number / zero;
const negativeInf = -number / zero;
const value = text * 8;

console.log(positiveInf);
console.log(negativeInf);
console.log(value);

// Завдання 2.3

console.log(0.1 + 0.2) // Очікувала 0.3

// Завдання 2.4

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MAX_SAFE_INTEGER + 4);
console.log(Number.MAX_SAFE_INTEGER + 5);

// як я помітила, то починаючи з певного моменту сусідні числа перестають розрізнятися

'use strict';

// Завдання 2.5

const wrongValue = "text" * 5;

console.log(wrongValue + 10);
console.log(wrongValue - 10);
console.log(wrongValue * 10);
console.log(wrongValue / 10);

// У всіх операціях результатом є NaN.
// Якщо NaN бере участь в арифметичній операції,
// результат також буде NaN.




