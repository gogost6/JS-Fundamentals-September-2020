function palindrome(array){
    //const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    for (let number in array) {
        let reversed = number;
        if(reverseNum(array[number]) === array[number]) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    function reverseNum(num) {
        return (
        parseFloat(
          num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
      )
    };
}
palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);