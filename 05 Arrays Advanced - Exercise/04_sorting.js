function foo(arr) {
    let sliced = arr.slice()
    const biggestNums = arr.sort((x, y) => y - x)
    const lowestNums = sliced.sort((x, y) => x - y)
    const concatArray = []

    biggestNums.forEach((x, i) => {
        concatArray.push(x)
        concatArray.push(lowestNums[i])
    })

    console.log(
        concatArray
            .splice(concatArray.length / 2)
            .reverse()
            .join(" ")
    )
}
foo([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])