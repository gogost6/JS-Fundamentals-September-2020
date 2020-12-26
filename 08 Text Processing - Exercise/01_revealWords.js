function solve(w, str) {
    let words = w.split(', ');
    let newStr = str.split(' ');
    
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < newStr.length; j++) {
            if(newStr[j].includes('*')) {
                if(newStr[j].length == words[i].length) {
                    newStr[j] = newStr[j].replace(newStr[j], words[i]);
                }
            }
        }
    }
    console.log(newStr.join(' '));
}
solve('great',
'softuni is ***** place for learning new programming languages'
)
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)
