function solve(str){
    let arr = str.split(' ');
    let materials = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    }

    let junk = {};

    let keys;
    for(let i = 0; i < arr.length; i += 2) {
        let q = Number(arr[i]);
        let a = arr[i+1].toLowerCase();
        if(materials.hasOwnProperty(a)) {
            materials[a] += q;
            if(250 <= materials['shards']) {
                console.log(`Shadowmourne obtained!`);
                materials['shards'] -= 250;
                break;
            } else if(250 <= materials['fragments']) {
                console.log(`Valanyr obtained!`);
                materials['fragments'] -= 250;
                break;
            } else if (250 <= materials['motes']) {
                console.log(`Dragonwrath obtained!`);
                materials['motes'] -= 250;
                break;
            }
        } else {
            if(junk.hasOwnProperty(a)) {
               junk[a] += q;
            } else {
                junk[a] = q;
            }
        }
    }
    Object.entries(materials)
    .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(x => {
        console.log(`${x[0]}: ${x[1]}`);
    });
    Object.entries(junk)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(x => {
        console.log(`${x[0]}: ${x[1]}`);
    })
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')