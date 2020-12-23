function bomb (arr1, arr2) {

    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            arr1.splice(i - arr2[1] > 0 ? i - arr2[1] : 0, arr2[1] * 2 + 1)
            i = 0
        }
    }
    arr1.forEach(x => {
        result += x;
    });
    console.log(result);
}
bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );
bomb([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    );