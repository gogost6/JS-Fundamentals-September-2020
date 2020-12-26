function solve(array) {

    let movies = [];

    for (const el of array) {
        if(el.includes('addMovie')) {
            let currentMovie = {};
            let name = el.substring(9);
            currentMovie.name = name;
            movies.push(currentMovie);
        } else if(el.includes('directedBy')) {
            let command = el.split(' directedBy ');
            let [movie, movieDirector] = command;
            movies.find(x => {
                if(x.name === movie) {
                    x.director = movieDirector;
                }
            });
        } else {
            let [movie, movieDate] = el.split(' onDate ');
            movies.find(x => {
                if(x.name === movie) {
                    x.date = movieDate;
                }
            })
        }
    }
    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])