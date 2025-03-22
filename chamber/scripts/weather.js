async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=948aa47b1be2326c617122954971879b';
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {
    const currentTemp = document.getElementById('weather-temperature');
    const icon = document.getElementById('weather-icon');
    const description = document.getElementById('weather-description');
    const high = document.getElementById('weather-high');
    const low = document.getElementById('weather-low');
    const humidity = document.getElementById('weather-humidity');
    const sunrise = document.getElementById('weather-sunrise');
    const sunset = document.getElementById('weather-sunset');

    currentTemp.innerHTML = `<b>${data.main.temp}&deg;</b> C`;

    let desc = data.weather[0];
    const iconSrc = `https://openweathermap.org/img/w/${desc.icon}.png`;

    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', desc.description);

    description.innerText = desc.description;
    high.innerHTML = `${data.main.temp_max}&deg;C`;
    low.innerHTML = `${data.main.temp_min}&deg;C`;
    humidity.innerText = `${data.main.humidity}%`;
    sunrise.innerText = convertToAmPm(data.sys.sunrise);
    sunset.innerText = convertToAmPm(data.sys.sunset);
}

function convertToAmPm(timestamp) {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${amPm}`;
}

async function fetchForecast() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=metric&appid=948aa47b1be2326c617122954971879b';
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }

}

function filterWeekdays(data) {
    const selectedDays = new Map();
    const today = new Date().toDateString();

    data.list.forEach(entry => {
        const date = new Date(entry.dt * 1000);
        const dayString = date.toDateString();

        if (!selectedDays.has(dayString)) {
            selectedDays.set(dayString, {
                weekday: dayString === today
                    ? "Today"
                    : date.toLocaleString("en-US", { weekday: "long" }),
                temp: entry.main.temp
            });
        }
    })

    return Array.from(selectedDays.values()).slice(0, 3);
}

function displayForecast(data) {
    const days = filterWeekdays(data);

    const section = document.getElementById('weather-forecast');

    const elements = days.map(({weekday, temp}) => {
        const p = document.createElement('p');
        p.innerHTML = `${weekday}: <b>${temp}&deg;C</b>`;
        return p;
    });

    section.replaceChildren(...elements);
}

function getDays(dayObj) {
    const weekday = getWeekDayOrToday(dayObj.dt);
    const temp = `${dayObj.temp.day}&deg;C`;

    return { weekday, temp }
}

function getWeekDayOrToday(timestamp) {
    const date = new Date(timestamp * 1000);

    return date.toDateString() === new Date().toDateString()
        ? "Today"
        : date.toLocaleString("en-US", { weekday: "long" });
}

fetchForecast();
apiFetch();
