// import { oData } from "../data/data";
import { createMovieTitles, createListItem, createUnorderedList, createAnchor } from "../utils/domUtils.js";
import { createPoster } from "./movieCard.js";

function runMoviePage(fullMovie) {
    const movieInformationRef = document.getElementById("movieInformation");
    
    createMovieTitles(fullMovie, movieInformationRef);
    
    const posterPlotContainerHTML = document.createElement("section");
    posterPlotContainerHTML.classList.add("movie-information__flex-container")
    posterPlotContainerHTML.classList.add("movie-information__flex-container--position-relative")
    
    createPoster(fullMovie, posterPlotContainerHTML, false);
    createPlot(fullMovie, posterPlotContainerHTML);
    
    movieInformationRef.appendChild(posterPlotContainerHTML);
    movieInformationRef.appendChild(createGenres(fullMovie.Genre));
    // movieInformationRef.appendChild(createFavoriteButton());
    movieInformationRef.appendChild(createMetadata(fullMovie));
}

function createMetadata(movie) {
    const ulOuterHTML = createUnorderedList();
    
    ulOuterHTML.appendChild(createScore(movie.Ratings));
    ulOuterHTML.appendChild(createMetaLine("Director", movie.Director, true));
    ulOuterHTML.appendChild(createMetaLine("Actors", movie.Actors, true));
    ulOuterHTML.appendChild(createMetaLine("Writer", movie.Writer, true));
    ulOuterHTML.appendChild(createMetaLine("Box Office", movie.BoxOffice, false));
    ulOuterHTML.appendChild(createMetaLine("Awards", movie.Awards, false));
    
    return ulOuterHTML;
}


function createMetaLine(metaName, metaContent, addInnerList) {
    const outerLiHTML = createListItem("movie-information__list-flex movie-information__list-flex--padding-1-0 movie-information__list-flex--border-top");
    
    if(addInnerList === true) {
        outerLiHTML.textContent = `${metaName}:`;

        const innerUlHTML = createUnorderedList("movie-information__list-flex");
        
        const peoplesArray = metaContent.split(", ")
        peoplesArray.forEach( name => {

            const aHTML = createAnchor("movie-information__meta-link");
            aHTML.textContent = name;
            aHTML.href = `https://www.google.se/search?q=${name.replaceAll(" ", "+")}`
            
            const innerLiHTML = createListItem("movie-information__meta-list-item");

            innerLiHTML.appendChild(aHTML);
            innerUlHTML.appendChild(innerLiHTML);
            outerLiHTML.appendChild(innerUlHTML);
        })

    } else {
        outerLiHTML.textContent = `${metaName}: ${metaContent}`;
    }
    return outerLiHTML;
    
}


function createScore(ratings) {
    const ulHTML = document.createElement("ul");
    ulHTML.classList.add("movie-information__flex-container");
    
    ratings.forEach( rating => {
        const listItemHTML = document.createElement("li");
        listItemHTML.textContent = `${rating.Source}: ${rating.Value}`;
        ulHTML.appendChild(listItemHTML);
    })
    return ulHTML;
    
}

/* 
function createFavoriteButton() {
    const favoriteButtonHTML = document.createElement("button");
    favoriteButtonHTML.classList.add("movie-information__favorite-btn");
    favoriteButtonHTML.textContent = "+ Add to favorites";
    
    return favoriteButtonHTML;
} */

function createGenres(genres) {
    const genreUlHTML = document.createElement("ul");
    genreUlHTML.classList.add("movie-information__flex-container");
    const genresArray = genres.split(", ");
    
    genresArray.forEach( genre => {
        const listItemHTML = document.createElement("li");
        listItemHTML.classList.add("movie-information__genre-list-item");
        listItemHTML.textContent = genre;
        
        genreUlHTML.appendChild(listItemHTML);
    });
    
    return genreUlHTML;
}


function createPlot(movie, htmlContainer) {
    const plotParagraphHTML = document.createElement("p");
    plotParagraphHTML.classList.add("movie-information__plot");
    
    plotParagraphHTML.textContent = movie.Plot;
    htmlContainer.appendChild(plotParagraphHTML)
    
}

export { runMoviePage };