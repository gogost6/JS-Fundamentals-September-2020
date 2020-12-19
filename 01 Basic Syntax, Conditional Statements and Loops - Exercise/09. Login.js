function solve(array) {
    let username = array.shift();
    let password = username.split(``).reverse().join(``);
    let counter = 0;
    let tryPass = array[counter]; 
    for (let i = 0; i < array.length; i++) {
        
        if(tryPass == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i == 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
            counter++;
            tryPass = array[counter];
        } 
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])