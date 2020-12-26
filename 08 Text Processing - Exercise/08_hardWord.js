function solve(arr) {
    let words = arr.pop();
    arr = arr.join(' ').split(' ');
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j].includes('_')) {
                let splited = arr[j].split('');
                let l = splited.length - 1;
                if(splited[l] != '_'){
                    let char = splited[l];
                    let w = splited.join('').substring(0, l);
                    if(w.length == words[i].length) {
                        arr[j] = w.replace(w, words[i] + char);
                    }
                } else {
                    splited.join('');
                    if(arr[j].length == words[i].length) {
                        arr[j] = arr[j].replace(arr[j], words[i]);
                    }
                }
                
            }
        }
    }
    console.log(arr.join(' '));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)