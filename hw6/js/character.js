const hero = {
    name: "Chippi",
    class: "Archer",
    level: 10,
    isAlive: true,

    stats: {
        hp: 1000,
        mana: 70, 
        strength: 2000,
        agility: 40,
        intelligence: 100,
    },

    location: {
        region: "East Europe",
        city: "Lviv",
        coordinates: {
            x: 20,
            y: 50, 
            z: 23,
        }
    },

    inventory: ['sword', 'helm', 'apple', 'potion', 'shield'],
    
    abilities: {
        attack: function () { return `${hero.name} attacking!`; }, 
        heal: () => { return `${hero.name} was healed!`; }, 
        levelUp: () => { return `${hero.name} raised level!`; },
    }
};

const enemy = {
    name: "Helly",
    "critical hit chance": 0.15,
    "attack-speed": 2.5,
    ["damage-" + hero.class]: 50,
}

const villain = {
    name: "Lilly",
    class: "Mage",
    level: 25,
    isAlive: true,

    stats: {
        hp: 2550,
        mana: 57, 
        strength: 1540,
        agility: 100,
        intelligence: 250,
    },

    location: {
        region: "West Europe",
        city: "Paris",
        coordinates: {
            x: 73,
            y: 42, 
            z: 11,
        }
    },

    inventory: ['herbs', 'water', 'fish', 'poison', 'knife'],
    
    abilities: {
        attack: function () { return `${villain.name} attacking!`; }, 
        heal: () => { return `${villain.name} was healed!`; }, 
        levelUp: () => { return `${villain.name} raised level!`; },
    }

};

// 2
console.log(hero);
console.log(hero.name);
console.log(hero.class);
console.log(hero.level);
console.log(hero.isAlive);

// 3
console.log(hero.stats);
console.log(hero.stats.strength);
console.log(hero.stats.intelligence * 2);

// 4
console.log(hero.inventory);
console.log(hero.inventory[0]);
console.log(hero.inventory[hero.inventory.length - 1]);
console.log(hero.inventory.length);

// 5
// console.log(enemy.critical hit chance);
// console.log(enemy.attack-speed);
// console.log(enemy."damage-" + hero.class);

// ключ "critical hit chance" містить пробіли
// тому через крапку його отримати не можна
// У "attack-speed" дефіс сприймається як оператор віднімання

// для доступу до ключів із пробілами, дефісами
// або динамічними назвами викор. квадратні дужки

console.log(enemy["critical hit chance"]);
console.log(enemy["attack-speed"]);
console.log(enemy["damage-" + hero.class]);

// 6
console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

// 7
console.log(hero.location.region);
console.log(hero.location.coordinates.z);

// 8 
console.log(hero.name);
console.log(villain.name);

if (hero.stats.hp > villain.stats.hp) {
    console.log(`${hero.name} has more hp than ${villain.name}`);
} else if (hero.stats.hp < villain.stats.hp) {
    console.log(`${villain.name} has more hp than ${hero.name}`);
} else {
    console.log(`Oops! They have an equal hp.`);
}

console.log(`Duel participants: ${hero.name} (${hero.inventory.join(", ")}) vs ${villain.name} (${villain.inventory.join(", ")})`);


