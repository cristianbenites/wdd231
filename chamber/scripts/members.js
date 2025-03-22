const url = 'https://cristianbenites.github.io/wdd231/chamber/data/members.json';

const buildData = async () => {
    const response = await fetch(url);
    const { members } = await response.json();

    const cards = members.map(createMemberCard);

    document.getElementById('members').replaceChildren(...cards);
    document.getElementById('members').classList.add('grid');
    document.getElementById('members').classList.remove('list');
}

const createMemberCard = (member) => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    const h2 = document.createElement('h2');
    h2.textContent = member.name;

    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = member.address;

    const hr = document.createElement('hr');

    const img = document.createElement('img');
    img.src = member.image_file;
    img.alt = `${member.name} Logo`;
    img.width = '64';
    img.height = '64';

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'EMAIL: ';
    const emailSpan = document.createElement('span');
    emailSpan.textContent = member.email;
    email.appendChild(emailSpan);

    const phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = 'PHONE: ';
    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = member.phone_number;
    phone.appendChild(phoneSpan);

    const url = document.createElement('p');
    url.classList.add('url');
    url.textContent = 'URL: ';
    const urlSpan = document.createElement('span');
    urlSpan.textContent = member.website_url;
    url.appendChild(urlSpan);

    card.appendChild(h2);
    card.appendChild(tagline);
    card.appendChild(hr);
    card.appendChild(img);
    card.appendChild(email);
    card.appendChild(phone);
    card.appendChild(url);

    return card;
};

const toGrid = () => {
    document.getElementById('members').classList.add('grid');
    document.getElementById('members').classList.remove('list');
}

const toList = () => {
    document.getElementById('members').classList.remove('grid');
    document.getElementById('members').classList.add('list');
}

const runGridListSwitcher = () => {
    const toGrid = document.getElementById('to-grid');
    if (toGrid) {
        toGrid.addEventListener('click', toGrid);
    }

    const toList = document.getElementById('to-list');
    if (toList) {
        toList.addEventListener('click', toList);
    }
}

buildData();
runGridListSwitcher();
