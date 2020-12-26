function solve(array) {;
    let obj = {};
    array[0].split(' ').forEach(word => {
        obj[word] = 0;
    });
    for (let word of array.slice(1)) {
        if(Object.keys(obj).includes(word)) {
            obj[word]++;
        }
    }

    for (const key of Object.keys(obj).sort((a,b) => obj[b] - obj[a])) {
        console.log(`${key} - ${obj[key]}`);
    }
}
solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )
