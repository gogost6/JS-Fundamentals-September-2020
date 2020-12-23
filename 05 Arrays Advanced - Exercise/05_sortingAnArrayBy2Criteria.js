function sort(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b)).sort((a,b) => a.length - b.length);
    arr.forEach(x => {
        console.log(x);
    });
}
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"])