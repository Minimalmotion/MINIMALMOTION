document.addEventListener('DOMContentLoaded', () => {
    const logoButton = document.getElementById('logo-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    logoButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
});

