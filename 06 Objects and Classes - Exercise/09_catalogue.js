function solve(arr) {
    let obj = {};
    let line;

    while((line = arr.shift()) !== undefined) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        obj[name] = price;
    }
        let c = 0;
        let keys = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
        let old = keys[0][0][0];
    keys.forEach(x => {
        if(c == 0) {
            console.log(old);
            c++;
        }
        if(old !== x[0][0]) {
            old = x[0][0];
            console.log(old);
        }
        console.log(`   ${x[0]}: ${x[1]}`);
    });
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])