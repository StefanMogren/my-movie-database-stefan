import { oData } from "../data/data.js";

async function fetchAPI(api) {
    // Får titta till errormeddelandet lite noggrannare senare
    return fetch(api)
        .then(response => response.json())
        .catch(error => console.log(error.message))

}

async function fetchTopMoviesAPI() {
    oData.movies = await fetchAPI("https://santosnr6.github.io/Data/favoritemovies.json");
}

async function fetchOMDbFullMovieAPI(apiKey, imdbId) {
    oData.fullInfoMovie = await fetchAPI(`http://www.omdbapi.com/?apikey=${apiKey}&plot=full&i=${imdbId}`)
}


export { fetchTopMoviesAPI, fetchOMDbFullMovieAPI };