window.addEventListener('DOMContentLoaded', () => {
    const totop = document.querySelector('.footer-totop');

    totop.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});