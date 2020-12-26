function solve(arr) {
    let a = arr[0] + arr[1];
    let b = arr[2];
    let c = 0;
    let v = ['a', 'e', 'i', 'o', 'u'];
    let arr1 = [];

    a = a.split('');
    
    for (let el of a) {
        for (let e of v) {
            if(e == el) {
                el = b[c];
                el = el.toUpperCase();
                c++;
                if(c >= b.length) c = 0;  
            }
        }
        arr1.push(el);
    }
    console.log(`Your generated password is ${arr1.reverse().join('')}`);
}
//solve(['ilovepizza', 'ihatevegetables','orange']);
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
//solve(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])