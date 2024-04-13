document.addEventListener('DOMContentLoaded', () => {
    const getJokeBtn = document.getElementById('getJokeBtn');
    const jokeParagraph = document.getElementById('joke');
    const categorySelect = document.getElementById('categorySelect');
    const jokeImg = document.getElementById('jokeImg');

    getJokeBtn.addEventListener('click', () => {
        const selectedCategory = categorySelect.value;
        fetch(`https://v2.jokeapi.dev/joke/${selectedCategory}`)
            .then(response => response.json())
            .then(data => {
                jokeImg.hidden = true; // Hide image by default
                if (data.setup) {
                    jokeParagraph.textContent = `${data.setup} ... ${data.delivery}`;
                } else {
                    jokeParagraph.textContent = data.joke;
                }
                // If the API provides joke-related images, display them:
                // jokeImg.src = data.image;
                // jokeImg.hidden = false;
            })
            .catch(error => jokeParagraph.textContent = 'Failed to load a joke');
    });
});
