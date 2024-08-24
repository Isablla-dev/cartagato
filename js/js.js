const catImage = document.getElementById('catImage');
const catData = document.getElementById('catData');
const closeButton = document.getElementById('closeButton');

const newImageUrl = '/img/gatoblanco.png'; 
const newData = {
    edad: '5 años',
    colorojos: 'Verde',
    sexo: 'Hembra'
};


function closeCard() {
    document.querySelector('.tarjeta').style.display = 'none';
}


function changeImageAndData() {
    catImage.style.backgroundImage = `url(${newImageUrl})`;
    catData.innerHTML = `
        <div class="edad">${newData.edad}</div>
        <div class="colorojos">${newData.colorojos}</div>
        <div class="sexo">${newData.sexo}</div>
    `;
}


closeButton.addEventListener('click', closeCard);


catImage.addEventListener('click', changeImageAndData);
