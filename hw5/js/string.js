'use strict'

// Завдання 4.1
const firstMethodString = 'Hi, my name is Vika';
const secondMethodString = "Hi, my name is Vika";
const thirdMethodString = `Hi, my name is Vika`;
console.log(firstMethodString)
console.log(secondMethodString)
console.log(thirdMethodString)

// Завдання 4.2
const textWithMarks = "Він сказав: \"Це — 'звичайна' помилка\".";
console.log(textWithMarks);

const textWithBackticks = `Він сказав: "Це — 'звичайна' помилка".`;

console.log(textWithBackticks);

// Завдання 4.3
const name = "Vika";
const age = 19;
const city = "Lviv";

console.log(`Hello! My name is ${name}, I'm ${age} years old, adn I live in ${city}.`);

// Завдання 4.4

console.log(textWithMarks.length); 
console.log(textWithMarks[0]);
console.log(textWithMarks[4])
console.log(textWithMarks[textWithMarks.length - 1])

// Завдання 4.5

const greeting = "Hello";

greeting[0] = "J";
console.log(greeting);

// У консолі  так і залишиться те, що було, бо рядки в JS є незмінними
// Я отримала наступну помилку в консолі TypeError: Attempted to assign to readonly property
