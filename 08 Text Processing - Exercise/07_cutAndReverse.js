function solve(str) {
    let arr = [];
    let arr2 = [];
    let start = str.substring(0, (str.length / 2));
    let mid = str.substring((str.length / 2), str.length);
    
    for (let i = start.length; i >= 0; i--) {
        arr.push(start[i]);
    }

    for (let i = start.length; i >= 0; i--) {
        arr2.push(mid[i])
    }
    console.log(`${arr.join('')}\n${arr2.join('')}`);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')