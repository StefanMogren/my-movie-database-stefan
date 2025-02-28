function createH1(classes) {
    const h1HTML = document.createElement("h1");
    h1HTML.className = classes;
    return h1HTML;
}

function createParagraph(classes) {
    const paragraphHTML = document.createElement("p");
    paragraphHTML.className = classes;
    return paragraphHTML;
}

function createListItem(classes) {
    const listItemHTML = document.createElement("li");
    listItemHTML.className = classes;
    return listItemHTML;
}

function createSection(classes) {
    const sectionHTML = document.createElement("section");
    sectionHTML.className = classes;
    return sectionHTML;
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

export { createH1, createParagraph, createSection, createListItem, createUnorderedList, createAnchor };
