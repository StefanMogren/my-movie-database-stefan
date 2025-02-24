import { oData } from "../data/data.js";
import { createMovieCard } from "./movieCard.js";
function runSearchPage() {
    console.log(oData.searchedMovies);
    const movies = oData.searchedMovies.Search;
    movies.forEach( movie => createMovieCard(movie) );
    // searchOMDbMoviesAPI()
}

export {runSearchPage}