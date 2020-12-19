function solve(number) {
    let procentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${number}% [${procentages}${dots}]`);
        console.log(`Still loading...`);
    }
}
solve(10)

// function foo(n) {
//     let arr = new Array(10).fill(".").map((x, i) => {
//         if (i < n / 10) x = "%"
//         return x
//     })

//     if (n !== 100) {
//         console.log(`${n}% [${arr.join("")}]
//     Still loading...`)
//     } else {
//         console.log(`${n}% Complete! 
// [${arr.join("")}]`)
//     }
// }
// foo(50)