document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(data => {
            const greetingMessage = document.getElementById('greetingMessage');
            data.forEach(item => {
                greetingMessage.innerHTML += `<p><strong>${item.nombre}</strong>: ${item.descripcion}</p>`;
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));  // Manejar errores
});
