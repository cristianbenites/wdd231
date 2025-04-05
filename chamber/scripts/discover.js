import { places } from "../data/places.mjs";


function buildPlaces() {
    const cards = places.map(place => {
        const h2 = document.createElement('h2');
        h2.textContent = place.name;

        const address = document.createElement('address');
        address.textContent = place.address;

        const description = document.createElement('p');
        description.textContent = place.description;

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = place.img;
        img.alt = `${place.name} Picture`;
        img.width = '300';
        img.height = '200';

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = 'Learn more';

        figure.appendChild(img);

        const div = document.createElement('div');
        div.classList.add('discover-card');
        div.appendChild(h2);
        div.appendChild(figure);
        div.appendChild(address);
        div.appendChild(description);
        div.appendChild(button);

        return div;
    });

    document.querySelector('.grid-discover').replaceChildren(...cards);
}

function getVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const current = new Date();

    if (!lastVisit) {
        return 'Welcome! Let us know if you have any questions.'
    } else {
        const lastVisitDate = new Date(lastVisit);
        const diff = current - lastVisitDate;
        const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            return 'Back so soon! Awesome!';
        }

        return `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
    }
}

function trackVisits() {
    const msg = getVisitMessage();

    document.getElementById('discover-welcome').textContent = msg;

    localStorage.setItem('lastVisit', new Date());
}

buildPlaces();
trackVisits();
