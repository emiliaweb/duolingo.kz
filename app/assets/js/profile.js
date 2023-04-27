window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-custom-file]');
    const fileInput = btn.querySelector('input[type=file]');

    fileInput.addEventListener('change', () => {
        btn.querySelector('span').innerHTML = fileInput.files[0].name;
    });

    const openNav = document.querySelector('[data-open-nav]');
    const nav = document.querySelector('[data-nav]');

    openNav.addEventListener('click', (e) => {
        e.preventDefault();
        openNav.classList.toggle('profile-trigger--active');
        nav.classList.toggle('profile-nav--active');
    })
})