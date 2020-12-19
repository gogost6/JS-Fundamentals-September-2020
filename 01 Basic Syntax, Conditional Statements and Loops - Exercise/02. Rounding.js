function solve (rounded, precision) {
    if (precision > 15) {
        precision = 15;
    }
    rounded = rounded.toFixed(precision);
    console.log(parseFloat(rounded));
}
solve(3.1415926535897932384626433832795, 2)
solve(10.5, 3)