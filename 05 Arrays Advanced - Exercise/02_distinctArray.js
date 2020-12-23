function dublicates(array) {
    debugger;
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let indexOfEl = array.indexOf(array[i]);
        if(i === indexOfEl) {
            newArr.push(array[i])
        }
    }
    console.log(newArr.join(` `));
}
// function dublicates(array) {
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j < array.length; j++) {
//             if(array[i] === array[j] && i !== j) {
//                 array.splice(i, 1);
//             }
//         }
//     }
//     console.log(array.join(` `));
// }
dublicates([7, 7, 7, 8, 9, 2, 3, 4, 1, 2])