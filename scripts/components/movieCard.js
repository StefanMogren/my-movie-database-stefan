import { checkFavoritesLocalStorage, setFavoritesLocalStorage } from "../modules/localStorage.js";
import { createDiv, createH3, createAnchor, createImg } from "../utils/domUtils.js";

/* --------------- Huvudfunktionen --------------- */
function createMovieCard(movie) {
    const innerDivHTML = document.createElement("div");

    // Filmtiteln
    const titleH3HTML = createH3("card-container__title");
    titleH3HTML.textContent = movie.Title;

    
    // Trailerlänken
    

    
    // Titeln och trailern läggs in i en div-container
    innerDivHTML.classList.add("card-container__inner-container")
    innerDivHTML.appendChild(titleH3HTML);
    
    createTrailerLink(movie.Trailer_link, innerDivHTML);

    // Kortbehållaren
    const cardSectionHTML = document.createElement("section");
    cardSectionHTML.classList.add("card-container__card")
    // createPoster skapar även bokmärket
    createPoster(movie, cardSectionHTML, true);
    
    cardSectionHTML.appendChild(innerDivHTML);
    
    const cardContainerREF = document.getElementById("cardContainer");
    cardContainerREF.appendChild(cardSectionHTML);
}

function createTrailerLink(trailerLink, innerDivHTML) {
    const trailerALinkHTML = createAnchor("card-container__trailer-link")
    trailerALinkHTML.href = trailerLink || `https://www.youtube.com/results?search_query=${movie.Title.replaceAll(" ", "+")}+trailer`;

    const playIconHTML = createImg("card-container__play-icon");
    playIconHTML.src = "../res/icons/play-white.svg";
    playIconHTML.classList.add("card-container__play-icon");
    playIconHTML.alt = "Play trailer icon"
    
    trailerALinkHTML.appendChild(playIconHTML);
    trailerALinkHTML.innerHTML += "Trailer";
    innerDivHTML.appendChild(trailerALinkHTML);
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