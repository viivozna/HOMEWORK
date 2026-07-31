'use strict'

// Завдання 2
// // Сцена 1
// let name;
// console.log(name);


// // Сцена 2
// let name = null;
// console.log(name);


// // Сцена 3
// function greet(user) {
//     console.log('Hello,', user);
// }
// greet();


// // Сцена 4
// function calculate(a, b) {
//     return a + b;
//     // забули повернути результат окремої змінної
// }
// console.log(calculate(2, 3));


// // Сцена 5
// function calculate(a, b) {
//     let result = a + b;
//     // не написали return
// }
// console.log(calculate(2, 3));


// // Сцена 6
// function calculate(a, b) {
//     return;
// }
// console.log(calculate(2, 3));


// // Сцена 7
// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// console.log(user.age);


// // Сцена 8
// const user = {
//     firstName: 'John',
//     middleName: null,
//     lastName: 'Doe'
// };
// console.log(user.middleName);


// // Сцена 9
// const arr = [10, 20, 30];
// console.log(arr[10]);


// // Сцена 10
// const user = {
//     name: 'Anna',
//     address: {
//         city: 'Kyiv'
//     }
// };
// console.log(user.address.street);


// Завдання 3

function describeEmpty(value) {
    if (value === undefined)
        return "Це undefined — JavaScript сам поставив або значення не задано";
    else if (value === null) {
        return "Це null — розробник свідомо сказав, що тут порожньо";
    } else if (value === '' || Array.isArray(value)) {
        return "Це не є порожнім значенням: " + `${typeof(value)}`;
    } else {
        return "Це не є порожнім значенням: " + `${typeof(value)}` + ", " + `${value}`;
    }
}

// console.log(describeEmpty(null));
// console.log(describeEmpty(undefined));
// console.log(describeEmpty(0));
// console.log(describeEmpty(''));
// console.log(describeEmpty([]));
// console.log(describeEmpty(false));

// Завдання 4
let userName;
let userAge;

userName = 'Anna';
userAge = 25;
console.log('name:', userName);
console.log('age:', userAge);

function getGreeting(name) {
    return (`Hello, ${name}`);
}

const message = getGreeting('World');
console.log('message:', message);

// тут я додала значення для userAge
// у функції додала return, щоб вона повертала результат, а не undefined.

// Завдання 5
const user1 = {
  name: 'Anna',
  contact: { email: 'anna@example.com' }
};

const user2 = {
  name: 'Bob'
};

console.log(user1.contact.email);
console.log(user2.contact?.email); 
// ?. перевіряє, чи існує contact, і якщо його ні, то повертатиме undefined замість помилки


