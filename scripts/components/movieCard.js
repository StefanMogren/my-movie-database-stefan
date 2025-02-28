import { checkFavoritesLocalStorage, setFavoritesLocalStorage } from "../modules/localStorage.js";
import { createDiv } from "../utils/domUtils.js";

/* --------------- Huvudfunktionen --------------- */
function createMovieCard(movie) {
    // Filmtiteln
    const titleH3HTML = document.createElement("h3");
    titleH3HTML.classList.add("card-container__title");
    titleH3HTML.textContent = movie.Title;
    
    // Trailerlänken
    const trailerALinkHTML = document.createElement("a");
    trailerALinkHTML.classList.add("card-container__trailer-link")
    trailerALinkHTML.href = movie.Trailer_link || `https://www.youtube.com/results?search_query=${movie.Title.replaceAll(" ", "+")}+trailer`;
    
    const playIconHTML = document.createElement("img");
    playIconHTML.src = "../res/icons/play-white.svg";
    playIconHTML.classList.add("card-container__play-icon");
    playIconHTML.alt = "Play trailer icon"
    
    trailerALinkHTML.appendChild(playIconHTML);
    trailerALinkHTML.innerHTML += "Trailer";
    
    // Titeln och trailern läggs in i en div-container
    const innerDivHTML = document.createElement("div");
    innerDivHTML.classList.add("card-container__inner-container")
    innerDivHTML.appendChild(titleH3HTML);
    innerDivHTML.appendChild(trailerALinkHTML);
    
    
    // Kortbehållaren
    const cardSectionHTML = document.createElement("section");
    cardSectionHTML.classList.add("card-container__card")
    // createPoster skapar även bokmärket
    createPoster(movie, cardSectionHTML, true);
    
    cardSectionHTML.appendChild(innerDivHTML);
    
    const cardContainerREF = document.getElementById("cardContainer");
    cardContainerREF.appendChild(cardSectionHTML);
}


function createPoster(movie, cardSectionHTML, addPosterLink) {
    const posterImgHTML = document.createElement("img");
    if(movie.Poster === "N/A" || !movie.Poster) {
        posterImgHTML.src = "../res/icons/missing-poster.svg";
        
    } else {
        posterImgHTML.src = movie.Poster;
    } 
    
    posterImgHTML.onerror = () => {
        posterImgHTML.src = "../res/icons/missing-poster.svg"
    }
    
    posterImgHTML.alt = `Movie poster of ${movie.Title}`;
    const divContainerHTML = createDiv("movie-information__div-container");

    if(addPosterLink === true) {
        const posterLinkHTML = document.createElement("a")
        posterLinkHTML.href =`./movie.html?imdbid=${movie.imdbID}`;
        posterImgHTML.classList.add("card-container__poster");
        
        posterLinkHTML.appendChild(posterImgHTML);
        divContainerHTML.appendChild(posterLinkHTML)
        cardSectionHTML.appendChild(divContainerHTML);
        
    } else {
        posterImgHTML.classList.add("movie-information__poster");
        divContainerHTML.appendChild(posterImgHTML);
        cardSectionHTML.appendChild(divContainerHTML);
        
    }
    
    createFavoriteBookmark(divContainerHTML, movie);
}


function createFavoriteBookmark(cardSectionHTML, movie) {
    const favoriteButtonHTML = document.createElement("button");
    favoriteButtonHTML.classList.add("favorite-bookmark");
    
    const favoriteImgHTML = document.createElement("img");
    favoriteImgHTML.id = movie.imdbID;
    favoriteImgHTML.alt = "Favorite bookmark icon";
    
    
    favoriteButtonHTML.addEventListener("click", () => {
        setFavoritesLocalStorage(favoriteImgHTML, movie)
    })
    
    
    checkFavoritesLocalStorage(favoriteImgHTML, movie);
    
    favoriteButtonHTML.appendChild(favoriteImgHTML);
    cardSectionHTML.appendChild(favoriteButtonHTML);
}

export { createMovieCard, createPoster };