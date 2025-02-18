import { apiKeyOMDb } from "../apiKeys/apiKeyOMDb.js"
import { fetchTopMoviesAPI } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { randomizeNumbers } from "./utils/utils.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}


pickMovieTrailers(5);

async function pickMovieTrailers(amount) {
    const movies = await pickMovies(amount);
    
    movies.forEach( (movie, i) => {
        renderTrailers(movie, (i + 1))
    })
}

async function pickMovies(amount) {
    const numbers = randomizeNumbers(amount);
    const topMovies = await fetchTopMoviesAPI();
    const moviesArray = [];

    numbers.forEach( number => {
        moviesArray.push(topMovies[number]);
    })

    return moviesArray;
}


pickTopMovies(20);

async function pickTopMovies(amount) {
    const movies = await pickMovies(amount)

    console.log(movies)
}