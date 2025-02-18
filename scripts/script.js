import { apiKeyOMDb } from "../apiKeys/apiKeyOMDb.js"
import { fetchTopMoviesAPI } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { randomizeNumbers } from "./utils/utils.js";
import { oData } from "./data/data.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    
} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    
} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    
}

// oData.movies definieras samt får alla filmer från API:et
await fetchTopMoviesAPI();



pickMovieTrailers(5);

function pickMovieTrailers(amount) {
    const movies = pickRandomMovies(amount);
    
    movies.forEach( (movie, i) => {
        renderTrailers(movie, (i + 1))
    })
}

function pickRandomMovies(amount) {
    const numbers = randomizeNumbers(amount);
    const moviesArray = [];
    
    numbers.forEach( number => {
        moviesArray.push(oData.movies[number]);
    })
    
    return moviesArray;
}


pickTopMovies(20);

function pickTopMovies(amount) {
    const movies = pickRandomMovies(amount)
    
    console.log(movies)
}