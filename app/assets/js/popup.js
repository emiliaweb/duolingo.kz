window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-popup]');
    const triggers = document.querySelectorAll('[data-trigger]');

    triggers.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            modal.classList.add('popup--active');
        });
    });

    modal.addEventListener('click', e => {
        const target = e.target;

        if (target.matches('[data-overlay]')) {
            modal.classList.remove('popup--active');
        }
    });
});