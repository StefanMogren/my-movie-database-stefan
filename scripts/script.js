import { apiKeyOMDb } from "../apiKeys/apiKeyOMDb.js"
import { fetchTopMoviesAPI } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { randomizeNumbers } from "./utils/utils.js";
import { oData } from "./data/data.js";
import { createMovieCard } from "./components/movieCard.js";

// Om index.html-sidan laddas körs detta
if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    // oData.movies definieras samt får alla filmer från API:et när fetchTopMoviesAPI() körs
    await fetchTopMoviesAPI();
    pickMovieTrailers(5);
    pickTopMovies(20);
    

// Om favorites.html laddas körs detta
} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    
    
// Om movie.html laddas körs detta
} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    window.onload = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const imdbID = urlParams.get("imdbid")
        if(imdbID) {
            console.log(`The IMDb ID is ${imdbID}`);
            
        } else {
            console.log("The IMDb ID is missing...");
            
        }
    }
    

// Om search.html laddas körs detta
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    
    
}


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


function pickTopMovies(amount) {
    const movies = pickRandomMovies(amount)
    
    console.log(movies)
    
    movies.forEach( movie => createMovieCard(movie))
}