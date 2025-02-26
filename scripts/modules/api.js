import { oData } from "../data/data.js";

async function fetchAPI(api) {
    // Får titta till errormeddelandet lite noggrannare senare
    
    try {
        const response = await fetch(api);
        
        if(!response.ok) {
            const error = new Error(response.status);
            error.details = response;
            throw error;
            
        } else {
            return await response.json();
        }
        
    } catch (error) {
        
        if(error.details.url.includes("santosnr6")) {
            console.error(`API fetch for ${api} failed! Status: ${error.message}`)
            
        } else {
            let data = await error.details.json();
            console.error(`API fetch for ${api} failed! Status: ${error.message}`)
            console.error(data.Error);
        }
        
        // if(error.details.)
        // let data = await response.json()
        
        // console.error(`API fetch error: Status: ${error[0].message}`)
        // console.error(`${error.message} Status: ${error.details.status}`);
        // console.error(error.details.jsonResponse.Error || "No additional info received.");
        
        
        // console.error(`The API that was trying to be fetched: ${api}`)
    }
    
    /* return fetch(api)
    .then(response => response.json())
    .catch(error => console.error(`API fetch for ${api} failed! Status: ${error.message}`)) */
    
    
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