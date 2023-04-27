window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-custom-file]');
    const fileInput = btn.querySelector('input[type=file]');

    fileInput.addEventListener('change', () => {
        btn.querySelector('span').innerHTML = fileInput.files[0].name;
    });

})