function solve(arr) {
    let newArr = arr.shift().split(/[, ]+/g);
    let line;
    let obj = {};
    while((line = newArr.shift()) !== undefined) {
        let totalHealth = 0;
        let chars = line.match(/[^\d+\-*\/.]/g);
        if(chars != null) {
            for (const el of chars) {
                let num = el.charCodeAt(0);
                totalHealth += num;
            }
        }
        let nums = line.match(/([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g);
        let dmg = 0;
        if(nums != null) {
            for (const el of nums) {
                dmg += Number(el);
            }
        }
        let a = line.match(/[\/*]/g);
        if(a != null) {
            for (const el of a) {
                if(el == '*') {
                    dmg *= 2;
                } else if(el == '/'){
                    dmg /= 2
                } 
            }
        }
        obj[line] = {h: totalHealth, dmg: dmg};
    }
    Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0])).forEach(x => {
        console.log(`${x[0]} - ${x[1].h} health, ${(x[1].dmg).toFixed(2)} damage`);
    });
}
solve(['M3ph-0.5s-0.5t0.0**']);
solve(['M3ph1st0**, Azazel']);
solve(['Gos/ho'])