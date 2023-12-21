const btnEl = document.querySelector('#btn');    
const imgWrapperEl = document.querySelector('#img-wrapper');

const generatePicture = () => {
    const imgRandomParameter = Math.floor(Math.random() * 1000);    
    const elementCreated = document.createElement('img');
    elementCreated.setAttribute("src", `https://picsum.photos/300?r=${imgRandomParameter}`);
    imgWrapperEl.appendChild(elementCreated);
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
generatePicture();
generatePicture();
buttonClickGenerate(btnEl);