function createH1(classes) {
    const h1HTML = document.createElement("h1");
    h1HTML.className = classes;
    return h1HTML;
};

function createH3(classes) {
    const h3HTML = document.createElement("h3");
    h3HTML.className = classes;
    return h3HTML;
};

function createParagraph(classes) {
    const paragraphHTML = document.createElement("p");
    paragraphHTML.className = classes;
    return paragraphHTML;
};

function createListItem(classes) {
    const listItemHTML = document.createElement("li");
    listItemHTML.className = classes;
    return listItemHTML;
};

function createSection(classes) {
    const sectionHTML = document.createElement("section");
    sectionHTML.className = classes;
    return sectionHTML;
};

function createDiv(classes) {
    const divHTML = document.createElement("div");
    divHTML.className = classes;
    return divHTML;
};

function createImg(classes) {
    const imgHTML = document.createElement("img");
    imgHTML.className = classes;
    return imgHTML;
}

function createUnorderedList(classes) {
    const unorderedListHTML = document.createElement("ul");
    unorderedListHTML.className = classes;
    return unorderedListHTML;
};

function createAnchor(classes) {
    const anchorHTML = document.createElement("a");
    anchorHTML.className = classes;
    return anchorHTML;
};

function createButton(classes) {
    const buttonHTML = document.createElement("button");
    buttonHTML.className = classes;
    return buttonHTML;
};

export { createH1, createH3, createParagraph, createImg, createDiv, createSection, createListItem, createUnorderedList, createAnchor, createButton };
