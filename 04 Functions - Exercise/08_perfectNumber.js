function perfectNum(n) {
    let result = 0;
    for(let i = 1; i < n; i++) {
        if(n % i === 0) {
            result += i;
        }
    }
    if(result == n) {
        console.log('We have a perfect number!'); 
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNum(1236498);