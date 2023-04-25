window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.header');
    const nav = header.querySelector('.header-nav');

    if (window.innerWidth >= 1023) {
        document.body.style.paddingTop = header.scrollHeight + 'px';
    } else {
        document.body.style.paddingTop = 60 + 'px';
    }
});