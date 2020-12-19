function solve(array, n) {
    let arrayL = array.length - 1
    for (let i = 0; i < n; i++) {
        let deleted = array.splice(0,1);
        array.push(parseInt(deleted.join()));
    }
    console.log(array.join(` `));
}
solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)