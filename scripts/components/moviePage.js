// import { oData } from "../data/data";
import { createMovieTitles, createListItem, createUnorderedList, createAnchor } from "../utils/domUtils.js";
import { createPoster } from "./movieCard.js";

function runMoviePage() {
    const fullMovie = {
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
        Awards: "Won 3 Oscars. 91 wins & 131 nominations total",
        BoxOffice: "$785,221,649",
        Country: "United States, United Kingdom",
        DVD: "N/A",
        Director: "James Cameron",
        Genre: "Action, Adventure, Fantasy",
        Language: "English, Spanish",
        Metascore: "83",
        Plot: "When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid \"Na'vi\" in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an \"avatar\" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
        Production: "N/A",
        Rated: "PG-13",
        Ratings: [
            {
                Source: "Internet Movie Database",
                Value: "7.9/10"
            },
            {
                Source: "Rotten Tomatoes",
                Value: "81%"
            },
            {
                Source: "Metacritic",
                Value: "83/100"
            }
        ],
        Released: "18 Dec 2009",
        Response: "True",
        Runtime: "162 min",
        Title: "Avatar",
        Type: "movie",
        Website: "N/A",
        Writer: "James Cameron",
        Year: "2009",
        imdbID: "tt0499549",
        imdbRating: "7.9",
        imdbVotes: "1,416,018"
    }
    console.log(fullMovie);
    
    // const { Actors, Awards, BoxOffice, Country, DVD, Director, Genre, Language, Metascore, Plot, Poster, Production, Rated, Ratings, Released, Response, Runtime, Title, Type, Website, Writer, Year, imdbID, imdbRating, imdbVotes } = fullMovie;
    
    const movieInformationRef = document.getElementById("movieInformation");
    
    createMovieTitles(fullMovie, movieInformationRef);
    
    const posterPlotContainerHTML = document.createElement("section");
    posterPlotContainerHTML.classList.add("movie-information__flex-container")
    posterPlotContainerHTML.classList.add("movie-information__flex-container--position-relative")
    
    createPoster(fullMovie, posterPlotContainerHTML, false);
    createPlot(fullMovie, posterPlotContainerHTML);
    
    movieInformationRef.appendChild(posterPlotContainerHTML);
    
    movieInformationRef.appendChild(createGenres(fullMovie.Genre));
    
    movieInformationRef.appendChild(createFavoriteButton());
    
    movieInformationRef.appendChild(createScore(fullMovie.Ratings));
    
    movieInformationRef.appendChild(createMeta(fullMovie));
}

function createMeta(movie) {
    const ulOuterHTML = createUnorderedList();
    const metaArray = [];

    metaArray.push(createMetaLine("Director", movie.Director, true));
    metaArray.push(createMetaLine("Actors", movie.Actors, true));
    metaArray.push(createMetaLine("Writer", movie.Writer, true));
    metaArray.push(createMetaLine("Box Office", movie.BoxOffice, false));
    metaArray.push(createMetaLine("Awards", movie.Awards, false));
    
    metaArray.forEach( meta => ulOuterHTML.appendChild(meta))
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

function createFavoriteButton() {
    const favoriteButtonHTML = document.createElement("button");
    favoriteButtonHTML.classList.add("movie-information__favorite-btn");
    favoriteButtonHTML.textContent = "+ Add to favorites";
    
    return favoriteButtonHTML;
}

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