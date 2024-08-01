const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const url = 'http://127.0.0.1:3000/submit'; // Replace with your server URL

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

app.post('/submit', (req, res) => {
    // Handle the form data here
    res.send('Form data received!');
});