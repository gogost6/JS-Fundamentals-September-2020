function foo(arr1, arr2) {
    let counter = 0;
    let a = arr1.slice(0, arr2[0]);
    let b = a.slice(arr2[1], a.length);

    b.forEach(x => {
        if (x == arr2[2]) {
            counter++;
        } 
    });
    console.log(`Number ${arr2[2]} occurs ${counter} times.`);
}
foo([5, 2, 3, 4, 1, 6],[5, 2, 3])