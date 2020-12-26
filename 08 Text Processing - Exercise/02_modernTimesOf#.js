function solve(str) {
    let arr = str.split(' ').filter(x => x.includes('#') && x.length > 1);
    for (const key of arr) {
        let length = key.length;
        let k = key.substring(1, length);
        let isOnlyW = true;
        k = k.slice(0);
        for (const char of k) {
            let code = char.charCodeAt();
            if (code < 65 || code > 90 && code < 97 || code > 122) {
                isOnlyW = false;
                break;
            }
        }
        if(isOnlyW) {
            console.log(k);
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')