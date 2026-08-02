'use strict'

const memberOne = {
    id: Symbol('member'),
    name: "Petro",
    joinDate: "2025-11-14",
};

const memberTwo = {
    id: Symbol('member'),
    name: "Ivanka",
    joinDate: "2024-11-09",
};

const memberThird = {
    id: Symbol('member'),
    name: "Sanya",
    joinDate: "2024-01-23",
};

const twin1 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

const twin2 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

// Завдання 2
// console.log(memberOne);
// console.log(memberTwo);
// console.log(memberThird);

// Завдання 3
// console.log(twin1);
// console.log(twin2);
// console.log(twin1 === twin2);
// console.log(twin1.id === twin2.id);
// console.log(twin1.name === twin2.name);
// console.log(twin1.id.description === twin2.id.description);

// згідно результатів перевірки 1, 2 — false; 3, 4 — true
// це тому, що id, які ми дали twin1 і twin2, хоч і візуально однакові для нас,
// але вони є внутрішніми унікальними ідентифікаторами
// однаковий опис Symbol не робить самі Symbol однаковими


// Завдання 4

// 4.1
// const s1 = Symbol('secret');
// const s2 = Symbol(s1.description);
// console.log(s1 === s2);
// // false, бо кожен Symbol є унікальним, навіть з однаковим описом


// 4.2
// const s1 = Symbol('id');
// const s2 = Symbol('id');
// console.log(s1 == s2);
// // Symbol з однаковим описом всеодно залишаються різними


// 4.3
// const s = Symbol('id');

// alert(s);              // помилка — Symbol не можна неявно перетворити в рядок
// alert(String(s));      // працює — Symbol явно перетворюється в рядок "Symbol(id)"
// alert(s.toString());   // працює — повертає рядок "Symbol(id)"
// alert(s.description);  // працює — повертає опис Symbol, тобто "id"

// // усе це ніяк не ламає унікальність Symbol, а просто дозволяє отримати його текстове представлення


// 4.4
const uniqueKey = Symbol('meta');
const data = {
  publicName: 'Alice',
  [uniqueKey]: 'секретна інформація'
};

// console.log(data);
// console.log(data[uniqueKey]);
// console.log(data.uniqueKey);
// console.log(Object.keys(data));

// Symbol-ключ не показується в Object.keys(), бо цей метод не повертає Symbol-ключі.
// Це зручно для зберігання додаткової або службової інформації,
// яку не потрібно показувати під час звичайного перегляду об'єкта.


// Завдання 5
const club = [
    {
        id: Symbol('member'),
        name: 'Oleh',
        joinDate: '2025-04-12'
    },
    {
        id: Symbol('member'),
        name: 'Sofia',
        joinDate: '2024-07-28'
    },
    {
        id: Symbol('member'),
        name: 'Danylo',
        joinDate: '2025-01-09'
    },
    {
        id: Symbol('member'),
        name: 'Kateryna',
        joinDate: '2024-12-03'
    },
    {
        id: Symbol('member'),
        name: 'Maksym',
        joinDate: '2025-06-17'
    }
];

function findMember(memberSymbol) {
    for (const member of club) {
        if (member.id === memberSymbol) {
            return member;
        }
    }

    return "Member not found";
}

console.log(findMember(club[0].id));
console.log(findMember(Symbol('member')));

// Завдання 6
const a = Symbol('shared');
const b = Symbol('shared');
console.log(a === b);   // false

const c = Symbol.for('shared');
const d = Symbol.for('shared');
console.log(c === d);   // true

// Я очікувала, що c === d буде true, бо Symbol.for()
// з однаковим ключем повертає той самий Symbol.
// Symbol викор., коли потрібен унікальний ідентифікатор,
// а Symbol.for() — коли один і той самий Symbol потрібно викор. в різних місцях.
// Наприклад, Symbol.for() можна використати для спільного ключа,
// який викор. різні частини програми.