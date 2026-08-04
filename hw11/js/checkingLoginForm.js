'use strict'

let email = "";
let password = "";
let isEmailVerified = false;

let canLogin = (email !== "" && password !== "" && isEmailVerified === true);

if (canLogin === true) {
    console.log("Логін успішний");
} else {
    console.log("Перевірте дані")
}
