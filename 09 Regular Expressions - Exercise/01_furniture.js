function solve(arr) {
    let result = "Bought furniture:\n";
    let total = 0;
    let command = arr.shift();
    
    while(command != 'Purchase') {
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d.]+)!(?<q>[\d]+)/g;
        let match = regex.exec(command);
        if(match) {
            result += match.groups.name + '\n';
            total += Number(match.groups.price) * Number(match.groups.q);
        }
        command = arr.shift();
    }
    result += `Total money spend: ${total.toFixed(2)}`
    console.log(result);
}
solve(['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5','Purchase'])
