function solve(arg) {
    arg = arg.toString();
    let result = 0;
    for (let i = 0; i < arg.length; i++) {
        result += Number(arg.charAt(i));
    }
    console.log(result);
}
solve(245678)