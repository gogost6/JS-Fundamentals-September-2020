function solve(startingYield) {
    let total = 0;
    let days = 0;
    while(true) {
        if (startingYield < 100) {
            total -= 26;
            break;
        }
        total += startingYield - 26;
        startingYield -= 10;
        days++;
    }
    console.log(days);
    console.log(Math.max(total, 0));
}
solve(111)