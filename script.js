const botonApi = document.getElementById('botonApi');
const infoApi = document.getElementById('infoApi');
const expBase = document.getElementById('expBase');

const llamarApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
    .then(res => res.json())
    .then(data => {
        infoApi.innerText = JSON.stringify(data);
        expBase.innerText = `EXP BASE: ${data.base_experience}`; 
    })
    .catch(e => console.error(`Error en el sistema: ${e}`));
}

botonApi.addEventListener('click', llamarApi);