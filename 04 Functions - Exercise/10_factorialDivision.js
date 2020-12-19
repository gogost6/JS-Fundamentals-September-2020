function division(a,b) {

    function factorial(a) {
        let result = a;

        while(a > 1) {
            a--;
            result *= a;
        }
        return result;
    }
    console.log((factorial(a) / factorial(b)).toFixed(2));
}
division(6, 2)