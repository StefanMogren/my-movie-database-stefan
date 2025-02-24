function createMovieTitles(movie, movieInformationRef) {
    const titleHTML = document.createElement("h1");
    titleHTML.classList.add("movie-information__title");
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

function createAnchor(classes) {
    const anchorHTML = document.createElement("a");
    anchorHTML.className = classes;
    return anchorHTML;
}

export { createMovieTitles, createListItem, createUnorderedList, createAnchor };
