function solve(array) {
    let bitcoin = 0;
    let dayCounter = 0;
    let money = 0;
    let dayOfPurchase = 0;
    let firstBuy = 0;
    for (let i = 0; i < array.length; i++) {
        dayCounter++;
        let element = array[i];
        if (dayCounter % 3 == 0) {
            element *= 0.7;
        }
        money += element * 67.51;
        
        if (money >= 11949.16) {
            if(dayOfPurchase == 0) {
                dayOfPurchase = dayCounter;
            }
            for (let j = money; money >= 11949.16;) {
                bitcoin++;
                money -= 11949.16;
            }
        } 
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
} 
solve([100, 200, 300])
