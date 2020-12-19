function solve(lostFights, helmetPr, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    let counter = 0;

    for (let i = 1; i <= lostFights; i++) {
        if(i % 2 == 0 && i % 3 == 0) {
            total += helmetPr + swordPrice + shieldPrice;
            counter++;
            if (counter == 2) {
                total += armorPrice;
                counter = 0;
            }
        } else if(i % 2 == 0) {
            total += helmetPr;
        } else if (i % 3 == 0) {
            total += swordPrice;
        }

    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
solve (23,
    12.50,
    21.50,
    40,
    200
    )
