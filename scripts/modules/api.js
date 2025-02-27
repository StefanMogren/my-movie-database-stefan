import { oData } from "../data/data.js";

async function fetchAPI(api) {
    // Då OMDb API:et inkluderar ett extra internt felmeddelande samt att den även kan ge ett falskt positiv så behöver dessa två fall inkluderas.
    try {
        const response = await fetch(api);
        
        // Om standardresponsen från OMDb API är falsk 
        if(!response.ok && api.includes("omdbapi.com")) {
            const error = new Error(response.status);
            // Inkludera även .json()-responsen i error-objektet
            error.details = await response.json();
            throw error;
            
            // Om standardresponsen från OMDb API okej
        } else if(response.ok && api.includes("omdbapi.com")) {
            const data = await response.json();
            
            // Den andra kontrollen om OMDb API:ets egna interna kontroll är falsk
            if(data.Response === "False") {
                const error = new Error("False positive");
                // Inkludera även .json()-responsen i error-objektet
                error.details = data;                
                throw error;

            } else {
                return data;
            }
            
            // Om standardresponsen från API allmänt sett är falsk
        } else if(!response.ok) {
            throw new Error(response.status);
            
            // Om standardresponsen från API allmänt sett är okej
        } else {
            return await response.json();
        }
        
    } catch (error) {
        // Om OMDb API
        if(api.includes("omdbapi.com")) {
            console.error(`API fetch for ${api} failed! Status: ${error.message}`)

            // Detta kommer visa OMDb API:ets egna interna errormeddelande
            console.error(error.details.Error);
            
        } else {
            console.error(`API fetch for ${api} failed! Status: ${error.message}`)
        } 
    }
}

async function fetchTopMoviesAPI() {
    oData.movies = await fetchAPI("https://santosnr6.github.io/Data/favoritemovies.json");
}

async function fetchOMDbFullMovieAPI(apiKey, imdbId) {
    oData.fullInfoMovie = await fetchAPI(`http://www.omdbapi.com/?apikey=${apiKey}&plot=full&i=${imdbId}`)
}

async function searchOMDbMoviesAPI(apiKey, movieSearch) {
    oData.searchedMovies = await fetchAPI(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieSearch}*`)
}


export { fetchTopMoviesAPI, fetchOMDbFullMovieAPI, searchOMDbMoviesAPI };