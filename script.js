fetch('https://your-replit-project.replit.co/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Hello from the frontend!' })
})
.then(response => response.json())
.then(data => {
    console.log('Response from backend:', data);
})
.catch(error => {
    console.error('Error:', error);
});
