function solve(arr) {
    let c = arr.shift();
    let total = 0;
    while(c != 'end of shift') {
        let regex = /%(?<name>[A-Z][a-z]+)%([^\|\.\$%]+)?<(?<product>[\w]+)>([^\|\.\$%]+)?\|(?<q>[\d]+)\|([^\|\.\$%\d]+)?(?<price>[\d.]+)\$/g;
        let match = regex.exec(c);
        if(match) {
            let p = Number(match.groups.q) * Number(match.groups.price);
            total += p;
            console.log(`${match.groups.name}: ${match.groups.product} - ${p.toFixed(2)}`);
        }
        c = arr.shift();
    }   
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])