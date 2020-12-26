function solve(array) {
    let employees = {};
    for(const line of array) {
        employees[line] = line.length;
    }
    
    // Object.entries(employees).forEach(element => {
    //     console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    // });
    for(const [name, length] of Object.entries(employees)) {
        console.log(`Name: ${name} -- Personal Number: ${length}`);
    };
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
