function foo(arr) {
    let going = [];
    arr.forEach(x => {
        const data = x.split(" ")
        if (data.length === 3) {
            going.includes(data[0]) ? console.log(`${data[0]} is already in the list!`) : going.push(data[0])
        } else {
            going.includes(data[0])
                ? (going = going.filter(x => x !== data[0]))
                : console.log(`${data[0]} is not in the list!`)
        }
    })

    going.forEach(x => console.log(x))
}


// function partyList(array) {
//     let newArr = [];
//     let counter1 = 0;
//     let counter2 = 0;

//     for (let i = 0; i < array.length; i++) {
//         let [name, is, isGoing] =
//         array[i].split(` `);

//         switch (isGoing) {
//             case 'not':
//                 counter1 == 0 ? console.log(`${name} is not in the list!`) : console.log();
//                 counter1++;
//                 break;
//             case 'going!':
//                 newArr.includes(name)? 
//                 console.log(`${name} is already in the list!`) 
//                 : newArr.push(name);
                
//                 break;
//         }
//     }
//     newArr.forEach(x => console.log(x));
// }
// foo(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']	);
foo(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])