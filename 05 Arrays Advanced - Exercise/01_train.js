function train(array) {
    let wagon = array.shift()
    .split(` `)
    .map(Number);
    let maxSeats = Number(array.shift());
    command();

    function addPassengers(n) {
        for (let i = 0; i < wagon.length; i++) {
            if (wagon[i] + n <= maxSeats) {
                wagon[i] += n;
                break;
            }
        }
    }
    

    function command (el) {
        for (let i = 0; i < array.length; i++) {
            let [command, num] 
            = array[i].split(' ');
    
            num = Number(num);
    
            switch(command) {
                case "Add":
                    add(num);
                    break;
                default :
                    addPassengers(Number(command));
                    break;
                
            }
        }
    } 
    
    function add(a) {
        wagon.push(a);
    }

    console.log(wagon.join(` `));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
