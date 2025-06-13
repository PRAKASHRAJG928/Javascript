movieName = "avengers"

async function fetchMovies(movieName) {
    try {
        let movie_list = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=f83ee4f5`);
        movie_list = await movie_list.json();
        console.log(movie_list);

    let parent = document.getElementById("parent");
        parent.innerHTML = ""; 

        if (movie_list.Search) {
            movie_list.Search.forEach(user => {
                parent.innerHTML += `
                    <div id="container">
                    <h3 class="movie_name">${user.Title}</h3>
                    <img src="${user.Poster}" alt="./istockphoto-1055079680-612x612.jpg" class="image">
                    <p class="year">${user.Year}</p>
                    </div>`;
            })
        } else {
            parent.innerHTML = `<p>No movies found for "${movieName}".</p>`;
        }
    } catch (error) {
        console.error(error.message);
    }
}

document.getElementById("searchButton").addEventListener("click", () => {
    let movieName = document.getElementById("searchInput").value.trim();
    if (movieName) {
        fetchMovies(movieName);
    } else {
        console.log("Please enter a movie name.");
    }
});












