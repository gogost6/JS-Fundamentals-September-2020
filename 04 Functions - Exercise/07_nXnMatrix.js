function matrix(a) {
    for(let i = 0; i < a; i++) {

        let line = ``;

        for(let j = 0; j < a; j++) {
            line += a + ` `;
        }
        console.log(line);
    }
}
matrix(2);