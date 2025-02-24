function checkFavoritesLocalStorage(starImgElem, movie) {
    const favorites = JSON.parse(localStorage.getItem("userFavorites")) || [];
    
    if(favorites.some( favorite => favorite.imdbID === movie.imdbID )) {
        starImgElem.src = "./res/icons/star-solid.svg";
        
    } else {
        starImgElem.src = "./res/icons/star.svg";
    }
}

function setFavoritesLocalStorage(starImgElem, movie) {
    let favorites = JSON.parse(localStorage.getItem("userFavorites")) || [];

    // Ta bort filmen från localStorage om den finns där
    if(favorites.some( favorite => favorite.imdbID === movie.imdbID )) {
        const index = favorites.findIndex(favorite => favorite.imdbID === movie.imdbID)

        favorites.splice(index, 1);

        starImgElem.src = "./res/icons/star.svg";

    // Lägg till filmen i localStorage
    } else {
        favorites.push(movie);
        starImgElem.src = "./res/icons/star-solid.svg";
    }
    localStorage.setItem("userFavorites", JSON.stringify(favorites))
}

export { checkFavoritesLocalStorage, setFavoritesLocalStorage }