document.addEventListener('DOMContentLoaded', () => {
    const logoButton = document.getElementById('logo-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    logoButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    // Ocultar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        // Si el clic fue en el botón del logo o en el menú, no hacer nada
        if (logoButton.contains(event.target) || dropdownMenu.contains(event.target)) {
            return;
        }
        // Si el menú está visible y se hace clic fuera, ocultarlo
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });
});

