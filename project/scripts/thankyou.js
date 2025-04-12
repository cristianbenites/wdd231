function buildThankYou() {
    const params = new URLSearchParams(window.location.search);

    document.getElementById('fname').textContent = params.get('name');
    document.getElementById('lname').textContent = params.get('last');
    document.getElementById('email').textContent = params.get('email');
    document.getElementById('phone').textContent = params.get('phone');
}

buildThankYou();
