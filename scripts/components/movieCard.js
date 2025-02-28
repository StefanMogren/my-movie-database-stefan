import { checkFavoritesLocalStorage, setFavoritesLocalStorage } from "../modules/localStorage.js";
import { createDiv, createH3, createAnchor, createImg, createSection, createButton } from "../utils/domUtils.js";

/* --------------- Huvudfunktionen --------------- */
function createMovieCard(movie) {
    const cardContainerREF = document.getElementById("cardContainer");
    
    const cardSectionHTML = createSection("card-container__card");
    createPoster(movie, cardSectionHTML, true);
    
    const innerDivHTML = createDiv("card-container__inner-container");
    createTitle(movie.Title, innerDivHTML)
    createTrailerLink(movie, innerDivHTML);
    
    cardSectionHTML.appendChild(innerDivHTML);
    cardContainerREF.appendChild(cardSectionHTML);
}

function createTrailerLink(movie, innerDivHTML) {
    const trailerALinkHTML = createAnchor("card-container__trailer-link")
    trailerALinkHTML.href = movie.Trailer_link || `https://www.youtube.com/results?search_query=${movie.Title.replaceAll(" ", "+")}+trailer`;

    const playIconHTML = createImg("card-container__play-icon");
    playIconHTML.src = "../res/icons/play-white.svg";
    playIconHTML.alt = "Play trailer icon";
    
    trailerALinkHTML.appendChild(playIconHTML);
    trailerALinkHTML.innerHTML += "Trailer";
    innerDivHTML.appendChild(trailerALinkHTML);
};

function createTitle(title, innerDivHTML) {
    const titleH3HTML = createH3("card-container__title");
    titleH3HTML.textContent = title;
    innerDivHTML.appendChild(titleH3HTML);
};

function createPoster(movie, cardSectionHTML, addPosterLink) {
    const posterImgHTML = createImg("");
    if(movie.Poster === "N/A" || !movie.Poster) {
        posterImgHTML.src = "../res/icons/missing-poster.svg";
        posterImgHTML.alt = `Placeholder poster for ${movie.Title}`;
        
    } else {
        posterImgHTML.src = movie.Poster;
        posterImgHTML.alt = `Movie poster of ${movie.Title}`;
    } ;
    
    posterImgHTML.onerror = () => {
        posterImgHTML.src = "../res/icons/missing-poster.svg"
    };
    
    const divContainerHTML = createDiv("movie-information__div-container");

    if(addPosterLink === true) {
        const posterLinkHTML = createAnchor("");
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
};


function createFavoriteBookmark(cardSectionHTML, movie) {
    const favoriteButtonHTML = createButton("favorite-bookmark");
    
    const favoriteImgHTML = createImg("");
    favoriteImgHTML.id = movie.imdbID;
    favoriteImgHTML.alt = "Favorite bookmark icon";
    
    
    favoriteButtonHTML.addEventListener("click", () => {
        setFavoritesLocalStorage(favoriteImgHTML, movie)
    })
    
    checkFavoritesLocalStorage(favoriteImgHTML, movie);
    
    favoriteButtonHTML.appendChild(favoriteImgHTML);
    cardSectionHTML.appendChild(favoriteButtonHTML);
};

export { createMovieCard, createPoster };