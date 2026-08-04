'use strict'

let hasPromoCode = true;
let cartTotal = 200;
let isBlackFriday = false;

let isDiscountApplied = (cartTotal >= 100 && hasPromoCode === true) || isBlackFriday === true;
let noDiscount = !isDiscountApplied;

if (isDiscountApplied === true) {
    console.log("Знижка застосована");
} else {
    console.log("Знижка не застосована")
};