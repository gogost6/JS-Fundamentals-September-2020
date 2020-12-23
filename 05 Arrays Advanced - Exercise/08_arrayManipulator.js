function solve(arr, commands) {
    let actions = {
        add(a,b) {
            a = +a;
            b = +b;
            arr.splice(a,0,b);
            return arr;
        },
        addMany(a, ...params) {
            a = +a;
            params = params.map(x => Number(x));
            for(let i = params.length - 1; i >= 0; i--) {
                arr.splice(a,0,params[i]);
            }
            return arr;
        }, contains(a) {
            a = +a;
            if(arr.indexOf(a) > -1) {
                console.log(arr.indexOf(a));
            } else {
                console.log(-1);
            }
            return arr;
        }, remove(a) {
            arr.splice(a,1);
            return arr;
        }, shift(a) {
            a = +a;
                for(let i = 0; i < a; i++){
                    let first = arr.shift();
                    arr.push(first);
               }
            return arr;
        }, sumPairs() {
            let newArr = [];
            for(let i = 0; i < arr.length; i += 2){
                if(arr[i+1] == undefined) {
                    newArr.push(arr[i])
                } else {
                    let sum = arr[i] + arr[i + 1];
                    newArr.push(sum)
                }
            }
            arr = newArr;
            return arr;
        }
    }; 
    let line;
    while((line = commands.shift()) !== 'print') {
        let [cmd, ...params] = line.split(' ');
        arr = actions[cmd](...params);
    }
    console.log(`[ ${arr.join(', ')} ]`);
}
solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])