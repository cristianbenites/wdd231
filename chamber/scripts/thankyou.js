function buildThankYou() {
    const params = new URLSearchParams(window.location.search);

    document.getElementById('fname').textContent = params.get('name');
    document.getElementById('lname').textContent = params.get('last');
    document.getElementById('org').textContent = params.get('organization');
    document.getElementById('email').textContent = params.get('email');
    document.getElementById('phone').textContent = params.get('phone');
    document.getElementById('business').textContent = params.get('business');
    document.getElementById('memlvl').textContent = params.get('membership-level');
    document.getElementById('timestamp').textContent = params.get('timestamp');
}

buildThankYou();
