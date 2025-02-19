function createMovieTitles(movie, movieInformationRef) {
    const titleHTML = document.createElement("h1");
    titleHTML.classList.add("movie-information__title");
    titleHTML.textContent = movie.Title;
    
    const subTitleHTML = document.createElement("h2");
    subTitleHTML.classList.add("movie-information__sub-title");
    subTitleHTML.textContent = `${movie.Type} - ${movie.Rated} - ${movie.Runtime}`

    movieInformationRef.appendChild(titleHTML)
    movieInformationRef.appendChild(subTitleHTML)
}

export { createMovieTitles };