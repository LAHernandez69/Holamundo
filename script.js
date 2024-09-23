document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const greetingMessage = document.getElementById('greetingMessage');
            data.forEach(item => {
                greetingMessage.innerHTML += `<p>${item.nombre}: ${item.descripcion}</p>`;
            });
        })
        .catch(error => console.error('Error:', error));
});
