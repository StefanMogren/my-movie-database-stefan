import { fetchTopMoviesAPI } from "../modules/api.js"
import { pickMovieTrailers, pickTopMovies } from "../utils/utils.js";


async function runIndexPage() {
    await fetchTopMoviesAPI();
    pickMovieTrailers(5);
    pickTopMovies(20);
};

export { runIndexPage };