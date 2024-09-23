document.getElementById('greetButton').addEventListener('click', function() {
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = '¡Hola, amigo! Bienvenido a mi página web.';
    greetingMessage.classList.remove('hidden'); // Muestra el mensaje de saludo
});
