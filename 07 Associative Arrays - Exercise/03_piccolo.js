function solve(array) {
    let parking = {};

    array.forEach(element => {
        [directions, carNumber] = element.split(', ');

        if(directions == 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }

    });
    let keys = Object.keys(parking).sort((a,b) => a.localeCompare(b));
    console.log(keys.join('\n'));
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])