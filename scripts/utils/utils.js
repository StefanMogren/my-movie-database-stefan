import { oData } from "../data/data.js";
import { renderTrailers } from "../modules/caroussel.js";
import { createMovieCard } from "../components/movieCard.js";


function randomizeNumbers(amount) {
    const numbersArray = [];
    for(let i = 0; i < amount; i++) {
        let randomValue = Math.floor( Math.random() * 38);

        while(numbersArray.includes(randomValue)) {
            randomValue = Math.floor( Math.random() * 38)
        }
        numbersArray.push(randomValue)
    }
    return numbersArray;
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
    
    // Varje individuella film skickas in i createMovieCard
    movies.forEach( movie => createMovieCard(movie))
}

export { randomizeNumbers, pickMovieTrailers, pickRandomMovies, pickTopMovies };