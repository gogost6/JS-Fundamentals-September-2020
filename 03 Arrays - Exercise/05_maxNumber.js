function solve(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr.push(array[i])
        }
    }
    console.log(newArr.join(` `));
}
solve([1, 4, 3, 2])