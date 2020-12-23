function solve(arr) {
    let inventory = arr.shift().split(' ');
    let actions = {
        Buy(x) {
            if(!inventory.includes(x)) {
                inventory.push(x);
            }
            return inventory;
        }, Trash(x) {
            if(inventory.includes(x)) {
                inventory.splice(inventory.indexOf(x), 1);
            }
            return inventory;
        }, Repair(x) {
            if(inventory.includes(x)) {
                let item = inventory.splice(inventory.indexOf(x), 1);
                inventory.push(item.join(' '));
            }
            return inventory;
        }, Upgrade(x) {
            let [old, newOne] = x.split('-');
            if(inventory.includes(old)) {
                let item = old + ':' + newOne;
                inventory.splice(inventory.indexOf(old) + 1, 0, item);
            }
            return inventory;
        }
    };

    let line;
    while((line = arr.shift()) !== undefined) {
        let [cmd, ...params] = line.split(' ');
        actions[cmd](...params);
    }
    console.log(inventory.join(' '));
}
solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);
solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])