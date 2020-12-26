function solve(str) {
    let regex = /(?<w1>[A-Za-z])(?<n>[\d]+)(?<w2>[A-Za-z])/gm;
    let line;
    let total = 0;
    while((line = regex.exec(str)) != null) {
        let num = Number(line.groups.n);
        if(line.groups.w1.charCodeAt(0) >= 65 && line.groups.w1.charCodeAt(0) <= 90) {
            let lower = line.groups.w1.toLowerCase();
            num = num / (lower.charCodeAt(0)- 96) ;
        } else {
            num = num * (line.groups.w1.charCodeAt(0) - 96);
        }

        if(line.groups.w2.charCodeAt(0) >= 65 && line.groups.w2.charCodeAt(0) <= 90) {
            let lower = line.groups.w2.toLowerCase();
            num = num - (lower.charCodeAt(0) - 96);
        } else {
            num = num + (line.groups.w2.charCodeAt(0) - 96);
        }
        total += num;
    }
    console.log(total.toFixed(2));
}
solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A')