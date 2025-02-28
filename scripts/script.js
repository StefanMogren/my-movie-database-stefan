import { runIndexPage } from "./pages/indexPage.js";
import { runFavoritesPage } from "./pages/favoritesPage.js";
import { runMoviePage } from "./pages/moviePage.js";
import { runSearchPage } from "./pages/searchPage.js";

// Om index.html-sidan laddas körs detta
if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    runIndexPage();
    
    // Om favorites.html laddas körs detta
} else if(window.location.pathname === '/favorites.html') {
    runFavoritesPage();
    
    // Om movie.html laddas körs detta
} else if(window.location.pathname === '/movie.html') {
    runMoviePage();
    
    // Om search.html laddas körs detta
} else if(window.location.pathname === '/search.html') {
    runSearchPage();
};