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

function createListItem(classes) {
    const listItemHTML = document.createElement("li");
    listItemHTML.className = classes;
    return listItemHTML;
}

function createUnorderedList(classes) {
    const unorderedListHTML = document.createElement("ul");
    unorderedListHTML.className = classes;
    return unorderedListHTML;
}

export { createMovieTitles, createListItem, createUnorderedList };
