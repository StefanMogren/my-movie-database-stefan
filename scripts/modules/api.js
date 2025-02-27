import { oData } from "../data/data.js";

async function fetchAPI(api) {
    // Då OMDb API:et inkluderar ett extra internt felmeddelande samt att den även kan ge ett falskt positiv så behöver dessa två fall inkluderas.
    try {
        const response = await fetch(api);
        
        // Kontroll specifik för OMDb API 
        if(api.includes("omdbapi.com")) {
            const data = await response.json();

            // Om OMDb API:ets egna interna kontroll är falsk
            if(data.Response === "False") {
                // Lagrar OMDbs egna felmeddelande inuti oData
                oData.omdbMessage = data.Error;
                
                // Om standardresponsen från OMDb API visar falsk positiv
                throw new Error(response.status === 200 ? `False ${response.status}` : response.status);
                
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
            console.error(oData.omdbMessage);
            
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

async function searchOMDbMoviesAPI(apiKey, searchInput) {
    oData.searchedMovies = await fetchAPI(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}*`)
}


export { fetchTopMoviesAPI, fetchOMDbFullMovieAPI, searchOMDbMoviesAPI };