const getJokeBtn = document.getElementById('getJokeBtn');
const jokeContainer = document.getElementById('jokeContainer');

getJokeBtn.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      return response.json();
    })
    .then(data => {
      if (data.type === 'single') {
        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === 'twopart') {
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      } else {
        throw new Error('Unknown joke format');
      }
    })
    .catch(error => {
      jokeContainer.innerHTML = `<p>${error.message}</p>`;
    });
});
