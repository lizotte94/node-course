const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const forecastMessage = document.querySelector('#forecast-message')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const address = search.value;
  forecastMessage.textContent = 'Loading...';

  fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      forecastMessage.textContent = data.error;
      return;
    }
    forecastMessage.textContent = `${data.location}\n${data.forecast}`;
    })
  })
})

