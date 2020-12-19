function solve(arr) {
    let rooms = arr.shift().split('|');
    let health = 100;
    let coins = 0;
    let c = 0;
    let isAlive = true;
    for (const el of rooms) {
        let [mode, n] = el.split(' ');
        n = Number(n);
        c++;
        if(mode == 'potion') {
            let oldHealth = health;
            health += n;
            if(health > 100) {
                let healed = 100 - oldHealth;
                health = 100;
                console.log(`You healed for ${healed} hp.\nCurrent health: ${health} hp.`);
            } else {
                console.log(`You healed for ${n} hp.\nCurrent health: ${health} hp.`);
            }
        } else if(mode == 'chest') {
            coins += n;
            console.log(`You found ${n} coins.`);
        } else {
            health -= n;
            if(health > 0) {
                console.log(`You slayed ${mode}.`);
            } else {
                isAlive = false;
                console.log(`You died! Killed by ${mode}.`);
                console.log(`Best room: ${c}`);
                break;
            }
        }     
    }
    if(isAlive) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}
solve([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`]);