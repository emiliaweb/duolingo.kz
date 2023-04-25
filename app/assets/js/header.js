['DOMContentLoaded', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        const langs = document.querySelector('.header-langs');
        const nav = document.querySelector('.header-nav');
        if (window.innerWidth <= 1023) {
            nav.insertAdjacentElement('afterbegin', langs);
        }
    });
})

window.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.header-trigger');
    const nav = document.querySelector('.header-nav');

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('header-trigger--active');
        nav.classList.toggle('header-nav--active');
    });
})