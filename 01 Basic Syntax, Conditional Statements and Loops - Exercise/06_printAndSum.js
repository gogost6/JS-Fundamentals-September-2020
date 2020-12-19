function solve(start, stop) {
    let sum = 0;
    let line = ``;
    
    for (let i = start; i <= stop; i++) {
        line += i + ` `;
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)
