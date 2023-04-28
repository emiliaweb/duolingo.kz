window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-popup]');
    const triggers = document.querySelectorAll('[data-trigger]');
    const body = document.body;

    triggers.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            modal.classList.add('popup--active');
            body.classList.add('no-scroll');
        });
    });

    modal.addEventListener('click', e => {
        const target = e.target;

        if (target.matches('[data-overlay]')) {
            modal.classList.remove('popup--active');
            body.classList.remove('no-scroll');
        }
    });
});