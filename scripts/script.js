import { apiKeyOMDb } from "../apiKeys/apiKeyOMDb.js"
import { fetchTopMovies } from "./modules/api.js";
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


pickMovieTrailers();
async function pickMovieTrailers() {
    const numbers = randomizeNumbers(5);
    const topMovies = await fetchTopMovies();
    const fiveMovies = [];
    
    numbers.forEach( number => {
        fiveMovies.push(topMovies[number]);
    })

    fiveMovies.forEach( (movie, i) => {
        renderTrailers(movie, (i + 1))
    })
}

