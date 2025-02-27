import { oData } from "../data/data.js";
import { createMovieCard } from "./movieCard.js";
function runSearchPage() {
    console.log(oData.searchedMovies);

    // Om sökresultatet inte ger någon film tillbaka
    if(oData.omdbMessage === "Movie not found!") {
        const cardContainerRef = document.getElementById("cardContainer");
        cardContainerRef.textContent = `No results found for ${oData.searchInput}`
    }
    
    const movies = oData.searchedMovies.Search;
    movies.forEach( movie => createMovieCard(movie) );
    // searchOMDbMoviesAPI()
}

export {runSearchPage}