function solve(arr) {
    let n = Number(arr.shift());
    let obj = {attacked : [], destroyed: []};
    for (let i = 0; i < n; i++) {
        let c = arr[i].match(/[star]/gi) && arr[i].match(/[star]/gi).length;
        let splited = arr[i].split('');
        let newStr = '';
        for(let q = 0; q < splited.length; q++) {
            let asci = splited[q].charCodeAt(0) - c;
            newStr += String.fromCharCode(asci);
        }
        let regex = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<mode>[A|D])![^@:!\->]*\->(?<count>\d+)/g;
        let match1 = regex.exec(newStr);
        if(match1) {
            if(match1.groups.mode == 'A') {
                obj.attacked.push(match1.groups.name);
            } else {
                obj.destroyed.push(match1.groups.name);
            }
        }
    }
    let att = obj.attacked.sort((a,b) => a.localeCompare(b));
    let desr = obj.destroyed.sort((a,b) => a.localeCompare(b));
    console.log(`Attacked planets: ${att.length}`);
    for (const el of att) {
        console.log(`-> ${el}`);
    }
    console.log(`Destroyed planets: ${desr.length}`);
    for (const el of desr) {
        console.log(`-> ${el}`);
    }
}
solve(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])
solve(['3',
'tt(DGsvywgerx>6444444444%H%1B9444',
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])