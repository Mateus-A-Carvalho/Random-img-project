const mainSectionEl = document.querySelector('#main-content');
const btnEl = document.querySelector('#btn');    

const generatePicture = () => {
    const imgRandomParameter = Math.floor(Math.random() * 1000);    
    const elementCreated = document.createElement('img');
    elementCreated.setAttribute("src", `https://picsum.photos/300?r=${imgRandomParameter}`);
    mainSectionEl.appendChild(elementCreated);
}

const buttonClickGenerate = (btn) => {
    btn.addEventListener("click", () => {
        
        generatePicture();
        generatePicture();
        generatePicture();
        generatePicture();        
    })
}

generatePicture();
generatePicture();
generatePicture();
generatePicture();
buttonClickGenerate(btnEl);