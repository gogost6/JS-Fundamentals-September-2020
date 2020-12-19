function solve(groupNum, groupType, weekDay) {
    let price = 0;

    switch(groupType) {
        case 'Students':
            if (weekDay === 'Friday') {
                price = 8.45;
            } else if (weekDay === 'Saturday') {
                price = 9.8;
            } else if (weekDay === 'Sunday') {
                price = 10.46;
            }
            break;
        case 'Business':
            if (weekDay === 'Friday') {
                price = 10.90;
            } else if (weekDay === 'Saturday') {
                price = 15.60;
            } else if (weekDay === 'Sunday') {
                price = 16;
            }
            break;
        case 'Regular':
            if (weekDay === 'Friday') {
                price = 15;
            } else if (weekDay === 'Saturday') {
                price = 20;
            } else if (weekDay === 'Sunday') {
                price = 22.50;
            }
            break;
    }
    let totalPrice = price * groupNum;
    if (groupNum >= 30 && groupType === 'Students') {
        totalPrice *= 0.85;
    } 
    if (groupNum >= 100 && groupType === 'Business') {
        totalPrice = (groupNum - 10) * price;
    } 
    if (groupNum >= 10 && groupNum <= 20 && groupType === 'Regular') {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(30, `Students`, `Sunday`);
solve(40, 'Regular', 'Saturday')