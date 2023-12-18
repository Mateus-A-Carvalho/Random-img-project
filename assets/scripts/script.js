const mainSectionEl = document.querySelector('#main-content');
const btnEl = document.querySelector('#btn');
const elementCreated = document.createElement('img');


const generatePicture = (element) => {
    mainSectionEl.appendChild(element);
    element.setAttribute("src", "https://picsum.photos/300");
}

generatePicture(elementCreated);