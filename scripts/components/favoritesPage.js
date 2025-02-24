import { getFavoritesLocalStorage } from "../modules/localStorage.js";
import { createMovieCard } from "./movieCard.js";

function runFavoritesPage() {
    const favoriteMovies = getFavoritesLocalStorage();
    favoriteMovies.forEach( movie => createMovieCard(movie) );
};

export { runFavoritesPage };