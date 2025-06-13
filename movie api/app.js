// let apikey = `http://www.omdbapi.com/?s=${movieName}&apikey=f83ee4f5`

let movieName = "the matrix"

async function fetchMovies(movieName) {
    
        let movie_list = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=f83ee4f5`);
        movie_list = await movie_list.json();
        console.log(movie_list);

}
fetchMovies(movieName)