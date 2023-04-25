window.addEventListener('DOMContentLoaded', () => {
    const pw = document.querySelector('#password');
    const input = pw.querySelector('input');
    const showPw = pw.querySelector('button');

    showPw.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.type == 'text') {
            input.type = 'password';
        } else {
            input.type = 'text';
        }
    })
});