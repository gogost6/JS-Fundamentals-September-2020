function solve(array) {
    let heroesData = [];

    for (const el of array) {
        let [hero, level, items] = el.split(` / `);
        heroesData.push({
            Hero: hero,
            level: Number(level),
            items: items
                .split(", ")
                .map(x => x.trim())
                .sort((x, y) => x.localeCompare(y))
                .join(", "),
        })
    }
    heroesData
            .sort((a,b) => a.level - b.level)
            .forEach(x =>
                console.log(`Hero: ${x.Hero}
    level => ${x.level}
    items => ${x.items}`)
            )
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])