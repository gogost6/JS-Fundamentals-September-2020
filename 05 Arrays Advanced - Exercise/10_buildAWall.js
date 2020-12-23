function solve(arr){
    let concrete = [];
    arr = arr.map(x => Number(x));
    while(true) {
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < 30) {
                num += 195;
                arr[i]++;
            }
        }
        concrete.push(num);
        num = 0;
        let isThirty = (x) => x == 30;
        if(arr.every(isThirty)) {
            break;
        }
    }
    let sum = (concrete.reduce((a,b) => a+b)) * 1900;
    console.log(concrete.join(', '));
    console.log(`${sum} pesos`);
}
solve(['21', '25', '28'])