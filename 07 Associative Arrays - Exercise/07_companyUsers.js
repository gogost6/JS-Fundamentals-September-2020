function solve(arr) {
    let obj = {};
    arr.forEach(el => {
        const [firm, id] = el.split(' -> ');
        if(obj[firm] === undefined) obj[firm] = [id];
        for(let i = 0; i < obj[firm].length; i++) {
            if(obj[firm][i] == id) {
                break;
            } 
            if(i == obj[firm].length - 1) {
                obj[firm].push(id);
            }
        }
    });
    arr = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));

    arr.forEach(el => {
        console.log(`${el[0]}`);
        el[1].forEach (x => {
            console.log(`-- ${x}`);
        });
    })
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )