function solve(arr) {
    let racers = arr.shift().split(', ');
    let command = arr.shift();
    let obj = {};
    racers.forEach(name => {
        obj[name] = 0;
    });

    while(command != 'end of race') {
        let regexName =  /[A-Za-z]/g;
        let regexD = /[\d]/g;
        let total = 0;
        let name = command.match(regexName).join('');
        total = command.match(regexD)
        .map(Number)
        .reduce((a,b) => a+b);
        if(obj.hasOwnProperty(name)) {
            obj[name] += total;
        }
        command = arr.shift();
    }
    let sorted = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])