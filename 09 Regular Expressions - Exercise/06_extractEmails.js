function solve(arr) {
    let split = arr.shift().split(' ');
    let emails = [];
    for (const el of split) {
        let match = el.match(/^([a-zA-Z0-9]([-|.])?([a-zA-Z0-9])?)*@[\w-]+(\.[A-Za-z]+)(.\w+)?/g)
        if(match) {
            emails.push(match);
        }
    }
    console.log(emails.join('\n'));
}
solve(['Please contact us at: support@github.com.']);
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])