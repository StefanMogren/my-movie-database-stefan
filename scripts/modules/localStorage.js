function checkFavoritesLocalStorage(imgElem, imdbID) {
    const favorites = JSON.parse(localStorage.getItem("userFavorites"));
    
    if(favorites.includes(imdbID)) {
        imgElem.src = "./res/icons/star-solid.svg";
        
    } else {
        imgElem.src = "./res/icons/star.svg";
    }
}

function setFavoritesLocalStorage(imgElem, imdbID) {
    let favorites = JSON.parse(localStorage.getItem("userFavorites")) || [];

    if(favorites.includes(imdbID)) {
        favorites = favorites.filter( favID => favID !== imdbID);
        imgElem.src = "./res/icons/star.svg";
    } else {
        favorites.push(imdbID);
        imgElem.src = "./res/icons/star-solid.svg";
    }
    localStorage.setItem("userFavorites", JSON.stringify(favorites))
}

export { checkFavoritesLocalStorage, setFavoritesLocalStorage }