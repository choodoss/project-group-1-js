const scrollEl = document.querySelector('.upward');
scrollEl.addEventListener('click', scrollTopTop);


window.addEventListener('scroll', function () {
    const windowHeight = window.innerHeight;
    scrollEl.classList.toggle('active', window.scrollY > windowHeight * 0.5);
});

function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}