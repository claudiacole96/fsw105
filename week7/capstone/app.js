const readline = require("readline-sync");

//weapons
class weapon {
    constructor(name, type, dmg, equip, own) {
        this.name = name
        this.type = type
        this.dmg = dmg
        this.equip = equip
        this.own = own
    }
}
const sword = new weapon("Sword", "metal", "0", false, false);
const bowAndArrow = new weapon("Bow and Arrow", "wood", "0", false, false);
const wand = new weapon("Wand", "magic", "0", false, false);

const weapons = [sword, bowAndArrow, wand];
let playerWeapons = [];
let findPlayerWeapon = () => player.equipWeapon = (weapons.filter(w => w.equip == true))[0].name;

//shields
class shield {
    constructor(name, type, def, equip, own) {
        this.name = name
        this.type = type
        this.def = def
        this.equip = equip
        this.own = own
    }
}
const basicShield = new shield("Basic Shield", "metal", "0", false, false);
const woodShield = new shield("Wooden Shield", "wood", "0", false, false);
const forceShield = new shield("Force Shield", "magic", "0", false, false);

const shields = [basicShield, woodShield, forceShield];
let playerShields = [];
let findPlayerShield = () => player.equipShield = (shields.filter(s => s.equip == true))[0].name;

//remove items from player inventory after use functions
const removeUsedItem = (item) => {
    for (i=0;i<playerItems.length;i++) {
        if (item.name == playerItems[i].name) {
            playerItems.splice(i, 1);
        }
    }
}

//items
class item {
    constructor(name, qnt, use) {
        this.name = name
        this.qnt = qnt
        this.use = use
    }
}
const miniBomb = new item("A Mini Bomb", 0, () => {
    if (miniBomb.qnt > 0) {
        chosenEnemy.curHP = chosenEnemy.curHP - (10 * player.level);
        miniBomb.qnt = miniBomb.qnt - 1;
        removeUsedItem(miniBomb);
        console.log("Item has been used.");
    } else {
        console.log("You do not have this item.");
    }
});
const fruit = new item("Fruit", 0, () => {
    if (fruit.qnt > 0) {
        player.curHP = player.curHP + 10;
        if (player.curHP > player.maxHP) {
            player.curHP = player.maxHP;
        }
        fruit.qnt = fruit.qnt - 1;
        removeUsedItem(fruit);
        console.log("Item has been used.");
    } else {
        console.log("You do not have this item.")
    }
})
const meat = new item("Meat", 0, () => {
    if (meat.qnt > 0) {
        player.curHP = player.curHP + (player.maxHP / 2);
        if (player.curHP > player.maxHP) {
            player.curHP = player.maxHP;
        }
        meat.qnt = meat.qnt - 1;
        removeUsedItem(fruit);
        console.log("Item has been used.");
    } else {
        console.log("You do not have this item.")
    }
})
const items = [miniBomb, fruit, meat];

//rare items
class rareItem extends item {
    constructor (name, qnt, use, own) {
        super(name, qnt, use)
        this.own = own
    }
}
const revivalStone = new rareItem("A Revival Stone", 0, () => {
    if (revivalStone.own == true && player.curHP < 1) {
        player.curHP = (player.maxHP / 2);
        revivalStone.own = false;
        console.log("Item has been used.");
    } else {
        console.log("You do not own this item");
    }
}, false);
const hpStone = new rareItem("An HP Stone", 0, () => {
    if (hpStone.own == true) {
        player.curHP = player.maxHP;
        hpStone.own = false;
        console.log("Item has been used.");
    } else {
        console.log("You do not own this item");
    }
}, false);
const bomb = new rareItem("A Bomb", 0, () => {
    if (bomb.own == true) {
        chosenEnemy.curHP = chosenEnemy.curHP / 2;
        bomb.own = false;
        console.log("Item has been used.");
    } else {
        console.log("You do not own this item");
    }
}, false);
const rareItems = [revivalStone, hpStone, bomb];
let playerItems = [];
let playerRareItems = [];
let getInventoryOfItems = () => {
    arr = [];
    for (i = 0; i < playerItems.length; i++) {
        arr.push(playerItems[i].name);
    }
    itemInventory = arr;
    itemInventory = itemInventory.sort();
}
let getInventoryOfRareItems = () => {
    arr = [];
    for (i = 0; i < rareItems.length; i++) {
        if (rareItems[i].own == true) {
            arr.push(rareItems[i].name);
        }
    }
    rareItemInventory = arr;
    rareItemInventory = rareItemInventory.sort();
}

//attacks
const basic = {
    name: "Basic Attack",
    type: "basic",
    level: 1,
    dmg: 1,
};
const spin = {
    name: "Spin Attack",
    type: "spin",
    level: 1,
    dmg: 1,
};
const dive = {
    name: "Dive Attack",
    type: "dive",
    level: 1,
    dmg: 1,
};
const playerAttacks = [basic, spin, dive];

//player default stats
const player =  {
    name: "",
    level: 1,
    maxHP: 50,
    curHP: 50,
    curXP: 0,
    dmg: 10,
    equipWeapon: "",
    equipShield: "",
    enemyKills: 0,
}

//level up functions called at end of every battle
let randomPick = arr => {
    newArr = arr.filter(i => i.own == true);
    if (newArr.length < 3) {
        availArr = [];
        availArr = arr.filter(i => i.own == false);
        x = Math.floor(Math.random() * availArr.length);
        for (i=0;i<arr.length;i++) {
            if (availArr[x].name == arr[i].name) {
                arr[i].own = true;
                if (arr == weapons) {
                    playerWeapons.push(arr[i].name);
                } else if (arr == shields) {
                    playerShields.push(arr[i].name);
                }
                console.log(`You received a ${arr[i].name}!`);
            }
        }
    } else {
        console.log("Your choice has maxed out, please choose again.");
        chooseLoot();
    }
}
let chooseLoot = () => {
    x = readline.keyIn(`Pick your level up loot! \n1) Weapon \n2) Shield \n`, {limit: "$<1-2>"});
    if (x == 1) {
        randomPick(weapons);
    } else if (x == 2) {
        randomPick(shields);
    } else {
        console.log("Please try again");
        chooseLoot();
    }
}
let playerAttackDmgCheck = selector => {
    if (playerAttacks[selector].level < 3) {
        return playerAttacks[selector].name;
    } else {
        return `${playerAttacks[selector].name} is maxed out`;
    }
}
let upgradeAttacks = () => {
    x = readline.keyIn(`Please choose which attack you which to upgrade: \n1) ${playerAttackDmgCheck(0)} \n2) ${playerAttackDmgCheck(1)} \n3) ${playerAttackDmgCheck(2)} \n`, {limit: "$<1-3>"}) - 1;
    if (playerAttacks[x].level !== 3 && x < 3) {
        playerAttacks[x].level = playerAttacks[x].level + 1;
        playerAttacks[x].dmg = playerAttacks[x].dmg + 0.5
        console.log(`Your ${playerAttacks[x].name} multiplier has been upgraded to ${playerAttacks[x].dmg}.`);
    } else if (x < 3) {
        console.log("Sorry, that attack is already maxed out. Please try again:");
        upgradeAttacks()
    } else {
        console.log("Please try again");
        upgradeAttacks();
    }
}
const checkXpStatus = () => {
    if (player.curXP >= 1000 && player.level == 4 || player.curXP >= 500 && player.level == 3 || player.curXP >= 250 && player.level == 2 || player.curXP >= 100 && player.level == 1){
        player.level = player.level + 1;
        player.dmg = player.dmg +5;
        player.maxHP = player.maxHP + 10;
        console.log(`Congratulations! You have been promoted to Level ${player.level}.`);
        chooseLoot();
        upgradeAttacks();
    }
}

// random enemy death loot drop function
let rareLootDrop = () => {
    availArr = [];
    availArr = rareItems.filter(i => i.own == false);
    if (availArr.length == 0) {
        randomlootDrop();
    } else {
        x = Math.floor(Math.random() * availArr.length);
        for (i=0;i<rareItems.length;i++) {
            if (availArr[x].name == rareItems[i].name) {
                rareItems[i].own = true;
                console.log(`The enemy has dropped loot! You have received ${rareItems[i].name}`);
            }
        }
    }
}
let randomlootDrop = () => {
    x = Math.random();
    if (x < .3) {
        rareLootDrop();
    } else {
        y = Math.floor(Math.random()*items.length);
        items[y].qnt = items[y].qnt + 1;
        playerItems.push(items[y]);
        console.log(`The enemy has dropped loot! You have received ${items[y].name}`);
    }
}

//enemies
class enemy {
    constructor(name, weakness, strength, dmg, curHP, maxHP, xp, active, rare, msg) {
        this.name = name
        this.weakness = weakness
        this.strength = strength
        this.dmg = dmg
        this.curHP = curHP
        this.maxHP = maxHP
        this.xp = xp
        this.active = active
        this.rare = rare
        this.msg = msg
    }
}
const spider = new enemy("A Spider", "dive", "none", 8, 30, 30, 25, false, false, `"Tk Tk Tk Tk"`);
const bats = new enemy("Bats", "spin", "none", 8, 30, 30, 25, false, false, `"Screeeeeeeee!"`);
const babyDragon = new enemy("A Baby Dragon", "basic", "none", 10, 40, 40, 50, false, true, `"Rawr!!!"`);
const goblin = new enemy("A Goblin", "basic", "none", 13, 50, 50, 25, false, false, `"What is that smell?! A human!"`);
const troll = new enemy("A Troll", "basic", "none", 13, 50, 50, 25, false, false, `"Who dares cross my path?! You will pay!"`);
const ogre = new enemy("A Ogre", "basic", "none", 15, 60, 60, 50, false, true, `"Whooo's there?! Dinner!"`);
const wolf = new enemy("A Wolf", "dive", "none", 18, 70, 70, 25, false, false, `"Grrrrrrrrrrrrr"`);
const bigSpider = new enemy("A Giant Spider", "basic", "none", 18, 70, 70, 25, false, false, `"THUMP THUMP THUMP"`);
const drider = new enemy("A Drider", "basic", "none", 20, 80, 80, 50, false, true, `"Well well.... you won't be leaving here alive young adventurer."`);
const vampire = new enemy("A Vampire", "wood", "none", 23, 90, 90, 25, false, false, `"Oh? I smell blood!"`);
const snake = new enemy("A Snake", "none", "wood", 23, 90, 90, 25, false, false, `"Ssssssso, dinner hassss jusssst walked in!"`);
const fury = new enemy("A Fury", "metal", "none", 25, 100, 100, 50, false, true, `"Kawwwwwwwww!"`);
const redDragon = new enemy("A Red Dragon", "none", "wood", 28, 100, 100, 0, false, false, `"Who dares enter my cave??"`);
const blueDragon = new enemy("A Blue Dragon", "magic", "none", 28, 100, 100, 0, false, false, `"Who dares enter my cave??"`);
const goldDragon = new enemy("A Gold Dragon", "none", "metal", 30, 150, 150, 0, false, true, `"Who dares enter my cave??"`);

const enemies = [spider, bats, babyDragon, goblin, troll, ogre, wolf, bigSpider, drider, vampire, snake, fury, redDragon, blueDragon, goldDragon];

//function to randomly select enemy based on level.... rare creatures are spawned less frequently
let chosenEnemy = {};
let randomEnemy = () => {
    x = Math.random();
    y = (3*(player.level - 1))
    if (x < .2) {
        enemies[i = 2 + y].active = true;
    } else {
        enemies[i = (Math.floor(Math.random()*2)) + y].active = true;
    }
    chosenEnemy = enemies[i];
}


//battle functions (all called during battle encounters)
let itemChoice = (i) => {
    if (items[i].qnt > 0) {
        return `${items[i].name} Qnt: ${items[i].qnt}`;
    } else {
        return "unavailable";
    }
}
let rareItemChoice = (i) => {
    if (rareItems[i].own == true) {
        return `${rareItems[i].name}`;
    } else {
        return "unavailable";
    }
}
let weaponChoice = (i) => {
    if (weapons[i].own == true) {
        return weapons[i].name;
    } else {
        return "unavailable";
    }
}
let shieldChoice = (i) => {
    if (shields[i].own == true) {
        return shields[i].name;
    } else {
        return "unavailable";
    }
}
let changeEquip = (array, selector) => {
    array.map(i => { if (i.equip == true) { i.equip = false }});
    array[selector].equip = true;
    return array[selector].name;
}
let equipChoice = (arr) => {
    if (arr == weapons) {
        chooseWeapon = (readline.keyIn(`You have walked upon a ${chosenEnemy.name}! Choose your weapons wisely. Choose wrong and your weapons won't be as affective in battle. \n1) ${weaponChoice(0)}\n2) ${weaponChoice(1)}\n3) ${weaponChoice(2)}\n`, {limit: "$<1-3>"})) - 1;
        if (weaponChoice(chooseWeapon) == "unavailable" || chooseWeapon >= 3) {
            console.log("Please Try Again");
            equipChoice(weapons);
        } else {
            player.equipWeapon = changeEquip(weapons, chooseWeapon);
        }
    } else if (arr == shields) {
        chooseShield = (readline.keyIn(`Now choose your Shield. \n1) ${shieldChoice(0)} \n2) ${shieldChoice(1)} \n3) ${shieldChoice(2)} \n`, {limit: "$<1-3>"})) - 1;
        if (shieldChoice(chooseShield) == "unavailable" || chooseShield >= 3) {
            console.log("Please Try Again");
            equipChoice(shields);
        } else {
            player.equipShield = changeEquip(shields, chooseShield);
        }
    }
}
let hpCheck = () => {
    console.log(`${player.name} HP: ${player.curHP} \n${chosenEnemy.name} HP: ${chosenEnemy.curHP}`);
}
let leastEffectiveShield = 0;
let mostEffectiveShield = 0;
let shieldIsDefensive = (selector, effectiveShield) => {
    if (shields[selector].type == chosenEnemy.weakness && effectiveShield == mostEffectiveShield) {
        mostEffectiveShield = 5;
    } else if (shields[selector].type == chosenEnemy.strength && effectiveShield == leastEffectiveShield) {
        leastEffectiveShield = 5;
    }
}
let leastEffectiveWeapon = 0;
let mostEffectiveWeapon = 0;
let equipIsEffective = (selector, effectiveWeapon) => {
    if (weapons[selector].type == chosenEnemy.weakness && effectiveWeapon == mostEffectiveWeapon) {
        mostEffectiveWeapon = 5;
    } else if (weapons[selector].type == chosenEnemy.strength && effectiveWeapon == leastEffectiveWeapon) {
        leastEffectiveWeapon = 5;
    }
}
let effectiveAtk = 0;
let atkIsAffective = (selector) => {
    effectiveAtk = 0;
    if (playerAttacks[selector].type == chosenEnemy.weakness) {
        effectiveAtk = 5;
    }
}
let calculatePlayerDmg = (selector) => {
    atkIsAffective(selector);
    equipIsEffective(selector,mostEffectiveWeapon);
    equipIsEffective(selector,leastEffectiveWeapon);
    return ((Math.floor(Math.random() * player.dmg)) * playerAttacks[selector].dmg) + mostEffectiveWeapon - leastEffectiveWeapon + effectiveAtk;
}
let calculatedEnemyDmg = (selector) => {
    shieldIsDefensive(selector, leastEffectiveShield);
    shieldIsDefensive(selector, mostEffectiveShield);
    return Math.floor(Math.random() * chosenEnemy.dmg) + leastEffectiveShield - mostEffectiveShield;
}

//boolean conditions to end game
let quitGame = false;
let dragonDefeat = false;

//Welcome to the game
console.log("\nWell hello there young adventurer. Welcome to the land of Fizz!");

player.name = readline.question("\nI haven't seen you around here before, what's your name? \n");

console.log(`\nNice to meet you ${player.name}. My name is Octavia, and it is my duty to show you the ropes for the quest you're about to take.`);

const levelOneWeapon = (readline.keyIn(`\nSay, what weapon are you bringin' along your travels? \n1) ${weapons[0].name} \n2) ${weapons[1].name} \n3) ${weapons[2].name} \n`, {limit: "$<1-3>"})) - 1;
weapons[levelOneWeapon].own = true;
weapons[levelOneWeapon].equip = true;
playerWeapons.push(weapons[levelOneWeapon].name);
findPlayerWeapon();

console.log(`\n${player.equipWeapon} you say? Sounds like you know what you're doing!`);

const levelOneShield = (readline.keyIn(`\nLet me gift you one of my shields for your adventure. Which one here would you like? \n1) ${shields[0].name} \n2) ${shields[1].name} \n3) ${shields[2].name} \n`, {limit: "$<1-3>"})) - 1;
shields[levelOneShield].own = true;
shields[levelOneShield].equip = true;
playerShields.push(shields[levelOneShield].name);
findPlayerShield();

console.log(`\nNow that you have your ${player.equipWeapon} and ${player.equipShield}, let's get down to what you're here for.`);
console.log(`A giant beast has been raiding our land. It's become too dangerous of a problem to handle, so we called in the best.`);
console.log(`Your task is to venture your way through the Forbidden Field and up the mountain. \nYou will encounter many different kinds of creatures. \nDefeating these creatures will make you stronger.`);
console.log(`\nBut the reason this quest is so difficult, there's a mysterious energy from within the field, the stronger you get, the stronger your enemies will get.`);
console.log(`Keep note of what weapons do more damage when you fight, as well as which attacks you use in battle. Don't forget to use your items!`);
console.log(`\nWell, ${player.name}, I believe you are ready to defeat the beast at the top of the mountain! I wish you luck, young adventurer!`);

while (player.curHP > 0 && dragonDefeat == false && quitGame == false ) {
    let keyPress = readline.keyIn(`"w" walk, "s" print stats, "i" print inventory, "q" quit game \n`);
    let playerRun = false;
    if (keyPress == "w" || keyPress == "W") {
        x = Math.random();
        if (x < .3) {
            randomEnemy();
            console.log(chosenEnemy.msg);
            console.log(`You have encountered ${chosenEnemy.name}. \nThey're weak against ${chosenEnemy.weakness}, but strong against ${chosenEnemy.strength}.`)
            equipChoice(weapons);
            equipChoice(shields);
            while (chosenEnemy.curHP > 0 && player.curHP > 0 && quitGame == false) {
                hpCheck();
                atk = (readline.keyIn(`Attack, use item, or run: \n1) ${playerAttacks[0].name} \n2) ${playerAttacks[1].name} \n3) ${playerAttacks[2].name} \n4) Use Item \n5) Run \n6) Quit Game \n`, {limit: "$<1-6>"})) - 1;
                if (atk == 5) {
                    check = readline.keyInYN("Are you sure you want to quit the game?  \n");
                    if (check == true) {
                        console.log(`You have quit the game.`);
                        quitGame = true;
                    } else {
                        console.log("You remained in the game");
                    }
                } else if (atk == 4) {
                    x = Math.random();
                    if (playerRun == true) {
                        console.log("You have already tried to run away.");
                    } else if (x < .5) {
                        console.log("You successfully ran away");
                        chosenEnemy.curHP = 0;
                    } else {
                        console.log("You did not run away");
                        playerRun = true;
                    }
                } else if (atk == 3) {
                    useItem = (readline.keyIn(`Choose an item to use: \n1) ${itemChoice(0)} \n2) ${itemChoice(1)} \n3) ${itemChoice(2)} \n4) Use Rare Item \n5) Go Back \n`, {limit: "$<1-5>"})) - 1;
                    if (useItem == 3) {
                        useRareItem = (readline.keyIn(`Choose a Rare Item to use: \n1) ${rareItemChoice(0)} \n2) ${rareItemChoice(1)} \n3) ${rareItemChoice(2)} \n4) Go Back`, {limit: "$<1-4>"})) - 1;
                        if (useRareItem < 3) {
                            rareItems[useRareItem].use();
                        }
                    } else if (useItem < 3) {
                        items[useItem].use();
                    }
                } else if (atk < 3) {
                    console.log(`You attack ${chosenEnemy.name} with ${playerAttacks[atk].name}`);
                    x = calculatePlayerDmg(atk);
                    console.log(`You did ${x} damage!`);

                    chosenEnemy.curHP = chosenEnemy.curHP - x;
                    if (chosenEnemy.curHP > 0) {
                        y = calculatedEnemyDmg(atk);
                        console.log(`${chosenEnemy.name} has hit you with ${y} damage!`);

                        player.curHP = player.curHP - y;
                    }
                }
            }
            if (player.curHP < 1 && revivalStone.own == true) {
                console.log(`You have died! But your Revival Stone has saved you!`);
                revivalStone.use();
            } else if (atk < 4) {
                if (player.level == 5) {
                    console.log(`Congratulations! You have defeated the beast and won the game!`);
                    dragonDefeat = true;
                } else {
                    console.log(`${player.name} defeated ${chosenEnemy.name}`);
                    player.enemyKills = player.enemyKills + 1;
                    player.curXP = player.curXP + chosenEnemy.xp;
                    console.log(`You earned ${chosenEnemy.xp} XP.`);
                    if (chosenEnemy.rare == true) {
                        randomlootDrop();
                    }
                    randomlootDrop();
                    checkXpStatus();
                }
            }
            if (player.curHP > 0) {
                chosenEnemy.curHP = chosenEnemy.maxHP;
                player.curHP = player.maxHP;
            }

        } else {
            console.log("There are no enemies in sight.");
        }

    } else if (keyPress == "s" || keyPress == "S") {
        console.log(player);
    
    } else if (keyPress == "i" || keyPress == "I") {
        let itemInventory = [];
        let rareItemInventory = [];
        getInventoryOfItems();
        getInventoryOfRareItems();
        console.log(`Weapon Inventory: ${playerWeapons} \nShield Inventory: ${playerShields} \nItem Inventory: ${itemInventory} \nRare Item Inventory: ${rareItemInventory}`);

    } else if (keyPress == "q" || keyPress == "Q") {
        check = readline.keyInYN("Are you sure you want to quit the game?  \n");
        if (check == true) {
            console.log(`You have quit the game.`);
            player.curHP = 0;
        } else {
            console.log("You remained in the game");
        }

    } else {
        console.log("Please enter action key again");
    }
}
console.log("The game has ended. \nThanks for playing!");