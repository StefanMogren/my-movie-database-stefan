// import { oData } from "../data/data";
import { createMovieTitles, createSection} from "../utils/domUtils.js";
import { createPoster } from "./movieCard.js";
import { fetchOMDbFullMovieAPI } from "../modules/api.js";
import { apiKeyOMDb } from "../../apiKeys/apiKeyOMDb.js"
import { oData } from "../data/data.js";
import { getURLSearchParams } from "../utils/utils.js";
import { createGenres, createMetadata, createPlot } from "./movieSection.js";

async function runMoviePage() {
    const imdbID = getURLSearchParams("imdbid");
    // Uppdaterar oData.fullInfoMovie med svaret från API:et
    await fetchOMDbFullMovieAPI(apiKeyOMDb, imdbID);

    const fullMovie = oData.fullInfoMovie;
    const movieInformationRef = document.getElementById("movieInformation");
    const posterPlotContainerHTML = createSection("movie-information__flex-container movie-information__flex-container--position-relative");

    movieInformationRef.appendChild(posterPlotContainerHTML);
    
    createMovieTitles(fullMovie, movieInformationRef);
    createPoster(fullMovie, posterPlotContainerHTML, false);
    createPlot(fullMovie, posterPlotContainerHTML);
    createGenres(fullMovie.Genre, movieInformationRef);
    createMetadata(fullMovie, movieInformationRef);
}

export { runMoviePage };