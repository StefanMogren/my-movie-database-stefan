// import oData from '../data/data.js';

/* export async function fetchTopMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    oData.topMovieList = movies;
} */

async function fetchAPI(api) {
    // Får titta till errormeddelandet lite noggrannare senare
    return fetch(api)
        .then(response => response.json())
        .catch(error => console.log(error.message))

}

async function fetchTopMoviesAPI() {
    let movies = await fetchAPI("https://santosnr6.github.io/Data/favoritemovies.json");
    return movies;
}

export { fetchTopMoviesAPI };