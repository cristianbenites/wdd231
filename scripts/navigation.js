function loadNavBtn() {
    document.getElementById('hamburger').addEventListener('click', () =>
        document.querySelector('nav').classList.toggle('active'));
}

function styleMenuForCurrentPage() {
    document.querySelectorAll('nav a').forEach(a => {
        if (a.textContent == 'Home') {
            a.classList.add('active');
        }
    });

}

loadNavBtn();
styleMenuForCurrentPage();
