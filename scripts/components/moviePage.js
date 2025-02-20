// import { oData } from "../data/data";
import { createMovieTitles } from "../utils/domUtils.js";

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

    createPoster

    
 
    
    
    
    
}

export { runMoviePage };