function solve(str) {
    let newArr = [];
    let counter = 0;
    let lastIndex = 0;
    for(let i = 1; i < str.length; i++) {

    if(str[i] == str[i].toUpperCase()) {
            counter++;
            if(counter == 1) {
                let name = str.substring(0, i);
                lastIndex = i;
                newArr.push(name);
            } else {
                let name = str.substring(lastIndex, i);
                lastIndex = i;
                newArr.push(name);
            }
        }
    }
    newArr.push(str.substring(lastIndex, str.length))
    console.log(newArr.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo')