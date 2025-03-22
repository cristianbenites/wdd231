function loadNavBtn() {
    document.getElementById('hamburger').addEventListener('click', () =>
        document.querySelector('nav').classList.toggle('active'));
}

loadNavBtn();
