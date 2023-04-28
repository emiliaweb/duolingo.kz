['DOMContentLoaded', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        const langs = document.querySelector('.header-langs');
        const socials = document.querySelector('.header-socials');
        const nav = document.querySelector('.header-nav');
        if (window.innerWidth <= 1023) {
            nav.insertAdjacentElement('afterbegin', langs);
            nav.insertAdjacentElement('beforeend', socials);
        }

        const header = document.querySelector('header.header');
    
        if (window.innerWidth >= 1023) {
            document.body.style.paddingTop = header.scrollHeight + 'px';
            document.documentElement.style.scrollPaddingTop = header.scrollHeight + 'px';
        } else {
            document.body.style.paddingTop = 60 + 'px';
            document.documentElement.style.scrollPaddingTop = 60 + 'px';
        }
    });
})

window.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.header-trigger');
    const nav = document.querySelector('.header-nav');

    function toggleNav() {
        trigger.classList.toggle('header-trigger--active');
        nav.classList.toggle('header-nav--active');
    }

    trigger.addEventListener('click', () => {
        toggleNav();
    });

    if (window.innerWidth <= 1023) {
        const navItems = document.querySelectorAll('.header-nav-list li a');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                toggleNav();
            });
        });
    }
});