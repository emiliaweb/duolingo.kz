window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.header');
    document.body.style.paddingTop = header.scrollHeight + 'px';
});