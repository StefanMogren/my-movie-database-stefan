import { createListItem, createH1, createParagraph, createUnorderedList, createAnchor, createSection} from "../utils/domUtils.js";
import { createPoster } from "./movieCard.js";

function createMovieSection(fullMovie) {
    const movieInformationRef = document.getElementById("movieInformation");
    const posterPlotContainerHTML = createSection("movie-information__flex-container movie-information__flex-container--position-relative");
    
    createMovieTitle(fullMovie, movieInformationRef);
    movieInformationRef.appendChild(posterPlotContainerHTML);
    createPoster(fullMovie, posterPlotContainerHTML, false);
    createPlot(fullMovie, posterPlotContainerHTML);
    createGenres(fullMovie.Genre, movieInformationRef);
    createMetadata(fullMovie, movieInformationRef);
}

function createMetadata(movie, movieInformationRef) {
    const ulOuterHTML = createUnorderedList();
    
    ulOuterHTML.appendChild(createScore(movie.Ratings));
    ulOuterHTML.appendChild(createMetaLine("Director", movie.Director, true));
    ulOuterHTML.appendChild(createMetaLine("Actors", movie.Actors, true));
    ulOuterHTML.appendChild(createMetaLine("Writer", movie.Writer, true));
    ulOuterHTML.appendChild(createMetaLine("Box Office", movie.BoxOffice, false));
    ulOuterHTML.appendChild(createMetaLine("Awards", movie.Awards, false));
    
    movieInformationRef.appendChild(ulOuterHTML);
}

function createMetaLine(metaName, metaContent, separateMetaContent) {
    const outerLiHTML = createListItem("movie-information__list-flex movie-information__list-flex--padding-1-0 movie-information__list-flex--border-top");
    
    if(separateMetaContent === true) {
        outerLiHTML.textContent = `${metaName}:`;
        const innerUlHTML = createUnorderedList("movie-information__list-flex");
        
        const peoplesArray = metaContent.split(", ")
        peoplesArray.forEach( name => {
            const innerLiHTML = createListItem("movie-information__meta-list-item");
            
            if(name === "N/A") {
                innerLiHTML.textContent = name;

            } else {
                const aHTML = createAnchor("movie-information__meta-link");
                aHTML.textContent = name;
                aHTML.href = `https://www.google.se/search?q=${name.replaceAll(" ", "+")}`;
                innerLiHTML.appendChild(aHTML);
            }
            
            innerUlHTML.appendChild(innerLiHTML);
            outerLiHTML.appendChild(innerUlHTML);
        })
        
    } else {
        outerLiHTML.textContent = `${metaName}: ${metaContent}`;
    }
    return outerLiHTML;
}

function createScore(ratings) {
    const ulHTML = createUnorderedList("movie-information__flex-container movie-information__flex-container--padding-bottom-1");
    
    ratings.forEach( rating => {
        const listItemHTML = document.createElement("li");
        listItemHTML.textContent = `${rating.Source}: ${rating.Value}`;
        ulHTML.appendChild(listItemHTML);
    })
    return ulHTML;
}

function createMovieTitle(movie, movieInformationRef) {
    const titleHTML = createH1("movie-information__title");
    titleHTML.textContent = movie.Title;
    
    const unorderedListHTML = createUnorderedList("movie-information__list-flex");

    const infoArray = [movie.Type, movie.Year, movie.Rated, movie.Runtime];


    infoArray.forEach( info => {
        const listItemHTML = createListItem("movie-information__info-list-item");
        listItemHTML.textContent = info
        unorderedListHTML.appendChild(listItemHTML);
    })

    movieInformationRef.appendChild(titleHTML)
    movieInformationRef.appendChild(unorderedListHTML)
}

function createGenres(genres, movieInformationRef) {
    const genreUlHTML = createUnorderedList("movie-information__flex-container");
    const genresArray = genres.split(", ");
    
    genresArray.forEach( genre => {
        const listItemHTML = createListItem("movie-information__genre-list-item");
        listItemHTML.textContent = genre;
        
        genreUlHTML.appendChild(listItemHTML);
    });
    
    movieInformationRef.appendChild(genreUlHTML);
}

function createPlot(movie, posterPlotContainerHTML) {
    const plotParagraphHTML = createParagraph("movie-information__plot");
    plotParagraphHTML.textContent = movie.Plot;
    
    plotParagraphHTML.addEventListener("click", () => {
        plotParagraphHTML.classList.toggle("movie-information__plot--display-block")
    })
    
    const containerHTML = document.createElement("div");
    containerHTML.appendChild(plotParagraphHTML);
    posterPlotContainerHTML.appendChild(containerHTML);
}

export { createMovieSection };