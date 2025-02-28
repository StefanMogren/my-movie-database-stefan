import { oData } from "../data/data.js";
import { createMovieCard } from "../components/movieCard.js";
import { apiKeyOMDb } from "../../apiKeys/apiKeyOMDb.js";
import { searchOMDbMoviesAPI } from "../modules/api.js";
import { getURLSearchParams } from "../utils/utils.js";

async function runSearchPage() {
    oData.searchInput = getURLSearchParams("searchMovie");

    // Uppdaterar oData.searchedMovies med svaret från API:et
    await searchOMDbMoviesAPI(apiKeyOMDb, oData.searchInput);
    
    // Om sökresultatet inte ger någon film tillbaka
    if(oData.omdbMessage === "Movie not found!") {
        const cardContainerRef = document.getElementById("cardContainer");
        cardContainerRef.textContent = `No results found for ${oData.searchInput}`;

    } else {
        const movies = oData.searchedMovies.Search;
        movies.forEach( movie => createMovieCard(movie) );
    };
};

export {runSearchPage};