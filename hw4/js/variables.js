'use strict'

// завдання 2
const firstName = "Viktoriia"; // ім`я не буде змінюватись протягом життя
const lastName = "Vozna"; // у цій програмі значення не змінюється
let age = 19; // вік змінюється кожного року
const city = "Lviv"; // поточне місто проживання
let currentHobby = "cake making"; // в різні періоди життя улюблені заняття змінюються
const yearOfBirth = 2006; // рік народження незмінний
let favoriteColour = "blue"; // улюблений колір може змінитися

console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("Age:", age);
console.log("City:", city);
console.log("Current hobby:", currentHobby);
console.log("Year of birth:", yearOfBirth);
console.log("Favorite colour:", favoriteColour);

// завдання 3
// console.log("Age before:", age);
// age = age + 1;
// console.log("Age after:", age);

// yearOfBirth = 2007;
// console.log(yearOfBirth) // TypeError: Attempted to assign to readonly property.

// let firstName = Vika; //SyntaxError: Cannot declare a let variable twice: 'firstName'.

// завдання 6
const personProfile = "Hello! My name is " + firstName + " " + lastName + ", I'm " + age + " years old, and I live in " + city + ".";   
console.log(personProfile);
