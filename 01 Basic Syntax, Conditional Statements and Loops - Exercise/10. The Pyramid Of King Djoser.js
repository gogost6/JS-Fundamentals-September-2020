function solve(base, incrm) { // 75/100
    let baseArea = base * base;
    let stoneIncrm = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let counter = 1;

    for(let i = base; i >= 0; base = base - 2) {
        baseArea = base * base;
        let marbleNow = 0;
        if(counter % 5 == 0) {
            stone = base * 4 - 4;
            lapis += stone * incrm;
            stoneIncrm += (baseArea - stone) * incrm;
            counter++;
        } else if(base <= 2) {
            gold = base * base * incrm;
            counter++;
            break;
        } else {
            stone = base * 4 - 4;
            marble += stone * incrm;
            marbleNow = stone * incrm;
            stoneIncrm += (baseArea - stone) * incrm;
            counter++;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneIncrm)}`);     
    console.log(`Marble required: ${Math.ceil(marble)}`);     
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);     
    console.log(`Gold required: ${Math.ceil(gold)}`);     
    console.log(`Final pyramid height: ${Math.floor((counter * incrm) - 1)}`);     
} 
solve (23, 0.5)

function Pyramid(base, increment) { // 100 / 100
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentbase=base;
 
    while (currentbase>2) {
     let marbel=currentbase*4-4;
     let stone=currentbase*currentbase-marbel;
        totalstone+=stone;
 
        row++;
        if(row%5===0){
            totallapis+=marbel;
        }else{
            totalmarble+=marbel;
        }
        currentbase-=2;
    }
    row++;
    let gold=currentbase*currentbase;
 
    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}