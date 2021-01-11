function solve(arr) {
    let obj = {};
    let line;

    while((line = arr.shift()) != 'Ave Cesar') {
        if(line.includes('->')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);
            if(obj[gladiator] == undefined) {
                obj[gladiator] = {};
                obj[gladiator][technique] = skill;
                obj[gladiator]['total'] = 0;
                obj[gladiator]['total'] += skill;
            } else {
                if(!obj[gladiator].hasOwnProperty(technique)) {
                    obj[gladiator][technique] = skill;
                    obj[gladiator]['total'] += skill;
                } else if(obj[gladiator][technique] < skill) {
                    let n = skill - obj[gladiator][technique];
                    obj[gladiator][technique] = skill;
                    obj[gladiator]['total'] += n;
                }
            }
        } else if(line.includes('vs')) {
            let [a, b] = line.split(' vs ');
            if(obj.hasOwnProperty(a) && obj.hasOwnProperty(b)) {
                for (const el of Object.entries(obj[a])) {
                    if(obj[b].hasOwnProperty(el[0]) && el[0] != 'total') {
                        if(obj[a]['total'] > obj[b]['total']) {
                            delete obj[b];
                            break;
                        } else {
                            delete obj[a];
                            break;
                        }
                    }
                }
            }
        }
    }
    Object.entries(obj).sort((a,b) => b[1].total - a[1].total || a[0].localeCompare(b[0])).forEach(x => {
        console.log(`${x[0]}: ${x[1].total} skill`);
        delete obj[x[0]]['total'];
        Object.entries(obj[x[0]]).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(y => {
            console.log(`- ${y[0]} <!> ${y[1]}`);
        });
    });
}
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'])