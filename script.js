const botonApi = document.getElementById('botonApi');
const infoApi = document.getElementById('infoApi'); // Cambié el ID para evitar duplicados
const expBase = document.getElementById('expBase');

const llamarApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
    .then(res => res.json())
    .then(data => {
        infoApi.innerText = JSON.stringify(data);
        expBase.innerText = `EXP BASE: ${data.base_experience}`; // Corregí la propiedad de "expBase"
    })
    .catch(e => console.error(`Error en el sistema: ${e}`)); // Corregí la forma de imprimir el error
}

botonApi.addEventListener('click', llamarApi);