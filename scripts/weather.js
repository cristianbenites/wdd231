const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=948aa47b1be2326c617122954971879b';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    const currentTemp = document.getElementById('current-temp');
    const icon = document.getElementById('weather-icon');
    const caption = document.querySelector('figcaption');

    currentTemp.innerHTML = `${data.main.temp}&deg;C`;

    let desc = data.weather[0];
    const iconSrc = `https://openweathermap.org/img/w/${desc.icon}.png`;

    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', desc.description);

    caption.textContent = `${desc.description}`;
}

apiFetch();
