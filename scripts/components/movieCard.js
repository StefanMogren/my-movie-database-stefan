

function createMovieCard(movie) {

    // Postern för filmen
    const posterImgHTML = document.createElement("img");
    posterImgHTML.classList.add("card-container__poster");
    posterImgHTML.src = movie.Poster;


    const posterLinkHTML = document.createElement("a")
    posterLinkHTML.href =`./movie.html?imdbid=${movie.imdbID}`;
    posterLinkHTML.appendChild(posterImgHTML);


    // Favoritknappen <<<saknas>>>
    const favoriteImgHTML = document.createElement("icon");
    favoriteImgHTML.classList.add("card-container__favorite-icon")
    

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
    cardSectionHTML.appendChild(posterLinkHTML);
    cardSectionHTML.appendChild(innerDivHTML);

    const cardContainerREF = document.getElementById("cardContainer");
    cardContainerREF.appendChild(cardSectionHTML);
}

export { createMovieCard };