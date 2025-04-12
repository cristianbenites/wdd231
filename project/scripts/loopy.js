import { cookies } from '../data/cookies.mjs';

function getDates() {
    const today = new Date();

    const yearElmt = document.querySelector("#currentyear");
    yearElmt.innerHTML = today.getFullYear();

    const lastModElmt = document.querySelector(".lastModified");
    lastModElmt.innerHTML = `Last Modification: ${document.lastModified}`;
}
getDates();

function createCookieCards() {
    const section = document.querySelector('.sec-2');
    if(section) {
        cookies.map(cookie => makeCard(cookie))
            .forEach(card => section.appendChild(card));
    }
}

function addToCart(cookie) {
    const selected = getSelectedProducts();

    const item = selected.find(i => i.id == cookie.id);

    if(item) {
        item.quantity += 1;
    } else {
        selected.push({
            id: cookie.id,
            title: cookie.title,
            quantity: 1
        })
    }

    updateSelectedProducts(selected);
}

function makeCard(cookie) {
    const img = document.createElement('img');
    img.setAttribute('src', cookie.imageUrl);
    img.setAttribute('alt', `Image of the cookie ${cookie.title}`);
    img.loading = 'lazy';

    const figure = document.createElement('figure');
    figure.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = cookie.title;

    const p = document.createElement('p');
    p.textContent = cookie.description;

    const span = document.createElement('span');
    span.textContent = cookie.displayPrice;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.setAttribute('data-product-id', cookie.id);
    button.addEventListener('click', () => addToCart(cookie));

    const body = document.createElement('div');
    body.classList.add('product-body');

    body.appendChild(h3);
    body.appendChild(p);
    body.appendChild(span);
    body.appendChild(button);

    const card = document.createElement('div');
    card.classList.add('product-card');

    card.appendChild(figure);
    card.appendChild(body);

    return card;
}
createCookieCards();

function getSelectedProducts() {
    const saved = localStorage.getItem('shopping-cart');
    let selected = [];
    if(saved) {
        selected = JSON.parse(saved);
    } else {
        localStorage.setItem('shopping-cart', '[]');
    }
    return selected;
}

function updateSelectedProducts(selected) {
    localStorage.setItem('shopping-cart', JSON.stringify(selected));
    run();
}

function buildShoppingCart() {
    const selected = getSelectedProducts();
    const section = document.getElementById('shopping-cart');

    let ul = section.querySelector('ul');
    if (ul) {
        ul.remove();
    }

    let btnSend = section.querySelector('#order-products');
    if (btnSend) {
        btnSend.remove();
    }

    if(selected.length == 0) {
        section.innerHTML += `<p>You didn't select any products yet.</p>`
        return;
    }

    const p = section.querySelector('p');
    if (p) {
        p.remove();
    }

    ul = document.createElement('ul');
    section.appendChild(ul);

    selected.forEach(item => putItemOnList(item, ul));

    btnSend = document.createElement('button');
    btnSend.classList.add('.btn');
    btnSend.setAttribute('id', 'order-products');
    btnSend.textContent = 'Order My Cookies'
    btnSend.addEventListener('click', sendOrder);

    section.appendChild(btnSend);
}

function sendOrder() {
    const selected = getSelectedProducts();

    let payload = 'Hello! I would like to order the following cookies: ';
    selected.forEach(item => {
        payload += `Item: ${item.title} Quantity: ${item.quantity}. `;
    })

    const link = `https://wa.me/5511998765432?text=${payload}`;
    window.open(link, '_blank').focus();
}

function removeItem(id) {
    const selected = getSelectedProducts();
    const newGroup = selected.filter(item => item.id != id);

    updateSelectedProducts(newGroup);
}

function putItemOnList(item, ul) {
    let li = document.createElement('li');
    li.setAttribute('data-product-id', item.id);
    li.innerHTML = `${item.title}: ${item.quantity}`;

    const a = document.createElement('button');
    a.classList.add('.btn');
    a.innerText = 'remove';
    a.addEventListener('click', () => removeItem(item.id));

    li.appendChild(a);
    ul.appendChild(li);
}

function run() {
    const section = document.getElementById('shopping-cart');
    if(section) {
        buildShoppingCart();
    }
}

run();
