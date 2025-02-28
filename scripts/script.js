import { searchOMDbMoviesAPI } from "./modules/api.js";
import { runMoviePage } from "./components/moviePage.js";
import { runFavoritesPage } from "./components/favoritesPage.js"
import { runSearchPage } from "./components/searchPage.js";
import { oData } from "./data/data.js";
import { runIndexPage } from "./components/indexPage.js";

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
    window.onload = async () => {
        console.log('search.html');
        const urlParams = new URLSearchParams(window.location.search);
        oData.searchInput = urlParams.get("searchMovie")
        
        if(oData.searchInput) {
            await searchOMDbMoviesAPI(apiKeyOMDb, oData.searchInput)
            runSearchPage();
        } else {
            console.error("No search input is present...");
        }
        
    }
    
}

