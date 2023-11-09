// script.js
document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;

    darkModeSwitch.addEventListener('change', function () {
        body.classList.toggle('dark-mode', darkModeSwitch.checked);
    });
});
