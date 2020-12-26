// function solve(str) {
//     let a = str.split('\\').pop().split('.');
//     console.log(`File name: ${a.join('\nFile extension: ')}`);
// }
// function solve(input) {
//     let file = input.split('\\').pop().split('.')
//     let ext = file.pop()
//     let name = file.length > 1 ? file.join('.') : file
//     console.log(`File name: ${name}\nFile extension: ${ext}`);
// }
function solve(input) {
    let [ext, ...name] = input.split('\\').pop().split('.').reverse()
    console.log(`File name: ${Array.isArray(name) ? name.reverse().join('.') : name} \nFile extension: ${ext} `);
}
solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')