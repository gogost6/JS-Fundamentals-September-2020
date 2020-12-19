function solve(array, magicNum) {
    let combination = [];
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        for (let j = 0; j < array.length; j++) {
            if (currentNum + array[j] == magicNum && i != j) {
                if(combination.includes(currentNum) && combination.includes(array[j])){
                    break;
                }
                combination.push(currentNum, array[j]);
                console.log(`${currentNum} ${array[j]}`);
                break;
            }
        }
    }
}
//function foo(array, num) {
//     for (let i = 0; i < array.length -1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             let sum = array[i] + array[j];
//             if(sum === num){
//                 console.log(`${array[i]} ${array[j]}`);
//             } 
//         } 
//     }
// }
solve([1, 2, 3, 4, 5, 6],6)