import { fetchOMDbFullMovieAPI } from "../modules/api.js";
import { apiKeyOMDb } from "../../apiKeys/apiKeyOMDb.js"
import { oData } from "../data/data.js";
import { getURLSearchParams } from "../utils/utils.js";
import { createMovieSection } from "./movieSection.js";

async function runMoviePage() {
    const imdbID = getURLSearchParams("imdbid");
    // Uppdaterar oData.fullInfoMovie med svaret från API:et
    await fetchOMDbFullMovieAPI(apiKeyOMDb, imdbID);

    createMovieSection(oData.fullInfoMovie);
}

export { runMoviePage };