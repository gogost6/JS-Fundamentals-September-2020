function solve(arr) {
    let obj = {};

    for(let i = 0; i < arr.length; i+=2) {
        let mat = arr[i];
        let value = Number(arr[i + 1]);
        if(obj[mat] === undefined) {
            obj[mat] = value;
        } else {
            obj[mat] += value;
        }
    }
    arr = Object.entries(obj);
    arr.forEach(x => {
        console.log(`${x[0]} -> ${x[1]}`);
    })
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )
solve ([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])
    