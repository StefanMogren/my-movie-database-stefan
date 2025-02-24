import { checkFavoritesLocalStorage, setFavoritesLocalStorage } from "../modules/localStorage.js";


function createPoster(movie, htmlElement, addPosterLink) {
    const posterImgHTML = document.createElement("img");
    posterImgHTML.src = movie.Poster;
    
    if(addPosterLink === true) {
        const posterLinkHTML = document.createElement("a")
        posterLinkHTML.href =`./movie.html?imdbid=${movie.imdbID}`;
        posterImgHTML.classList.add("card-container__poster");
        posterLinkHTML.appendChild(posterImgHTML);
        htmlElement.appendChild(posterLinkHTML);
        
    } else {
        posterImgHTML.classList.add("movie-information__poster");
        htmlElement.appendChild(posterImgHTML);
        
    }

    createFavoriteBookmark(htmlElement, movie.imdbID);
}




function createFavoriteBookmark(htmlElement, imdbID) {
    const favoriteButtonHTML = document.createElement("button");
    favoriteButtonHTML.classList.add("favorite-bookmark");

    const favoriteImgHTML = document.createElement("img");
    favoriteImgHTML.id = imdbID;
    favoriteImgHTML.alt = "Favorite bookmark icon";
    

    favoriteButtonHTML.addEventListener("click", () => {
        setFavoritesLocalStorage(favoriteImgHTML, imdbID)
    })


    // Kontroll ifall filmens imdbID finns sparad som favoriter i localStorage
    // En tom stjärna om nej
    // En fylld stjärna om jag
    checkFavoritesLocalStorage(favoriteImgHTML, imdbID);
    
    
    favoriteButtonHTML.appendChild(favoriteImgHTML);
    
    htmlElement.appendChild(favoriteButtonHTML);
    // favoriteImgHTML.classList.add()
}



/* --------------- Huvudfunktionen --------------- */
function createMovieCard(movie) {
    // Filmtiteln
    const titleH3HTML = document.createElement("h3");
    titleH3HTML.classList.add("card-container__title");
    titleH3HTML.textContent = movie.Title;
    
    
    // Trailerlänken
    const trailerALinkHTML = document.createElement("a");
    trailerALinkHTML.classList.add("card-container__trailer-link")
    trailerALinkHTML.textContent = "Trailer";
    trailerALinkHTML.href = movie.Trailer_link;
    
    
    // Titeln och trailern läggs in i en div-container
    const innerDivHTML = document.createElement("div");
    innerDivHTML.classList.add("card-container__inner-container")
    innerDivHTML.appendChild(titleH3HTML);
    innerDivHTML.appendChild(trailerALinkHTML);
    
    // Kortbehållaren
    const cardSectionHTML = document.createElement("section");
    cardSectionHTML.classList.add("card-container__card")
    createPoster(movie, cardSectionHTML, true);
    
    cardSectionHTML.appendChild(innerDivHTML);
    
    const cardContainerREF = document.getElementById("cardContainer");
    cardContainerREF.appendChild(cardSectionHTML);
}





export { createMovieCard, createPoster };