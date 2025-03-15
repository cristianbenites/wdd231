function loadNavBtn() {
    document.getElementById('hamburger').addEventListener('click', () =>
        document.querySelector('nav').classList.toggle('active'));
}

function styleMenuForCurrentPage() {
    document.querySelectorAll('nav a').forEach(a => {
        const location = window.location.href;

        const target = a.textContent.toLowerCase() + '.html';

        if (location.includes(target)) {
            a.classList.add('active');
        }
    });

}

loadNavBtn();
styleMenuForCurrentPage();
