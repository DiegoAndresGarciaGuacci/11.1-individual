
        function getDragoniteData() {
            
            fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
                .then(response => response.json())
                .then(data => {
                   
                    const dragoniteData = `
                        <p><strong>Nombre:</strong> ${data.name}</p>
                        <p><strong>Altura:</strong> ${data.height / 10} metros</p>
                        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
                        <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
                    `;
                    document.getElementById('dragoniteData').innerHTML = dragoniteData;
                })
                .catch(error => {
                    console.error('Error al obtener los datos de Dragonite:', error);
                });
        }
