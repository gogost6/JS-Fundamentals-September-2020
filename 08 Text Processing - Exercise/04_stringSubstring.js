function solve(w, str) {
    str = str.toLowerCase().split(' ');
    str.includes(w) ? console.log(w) : console.log(`${w} not found!`);
}
solve('javascript',
'JavaScript is the best programming language');
solve('python',
'JavaScript is the best programming language')