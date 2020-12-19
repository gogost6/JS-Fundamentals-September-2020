function solution(x, y, z) {
    let sum = sumTwoNumbers(x, y);
    let result = substractNumber(sum, z);

    console.log(result);

    function sumTwoNumbers(a,b) {
        return (a + b);
    }

    function substractNumber(a, b) {
        return (a - b);
    }
}
solution(23, 6, 10)