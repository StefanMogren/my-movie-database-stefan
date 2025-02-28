import { runIndexPage } from "./components/indexPage.js";
import { runFavoritesPage } from "./components/favoritesPage.js";
import { runMoviePage } from "./components/moviePage.js";
import { runSearchPage } from "./components/searchPage.js";

// Om index.html-sidan laddas körs detta
if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    runIndexPage();
    
    // Om favorites.html laddas körs detta
} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    runFavoritesPage();
    
    // Om movie.html laddas körs detta
} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    runMoviePage();
    
    // Om search.html laddas körs detta
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    runSearchPage();
};