document.addEventListener('DOMContentLoaded', () => {
    // Variables para el dropdown del menú
    const logoButton = document.getElementById('logo-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    // Toggle del menú desplegable
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
  
    //////////////////////////////////////////////////////////////////////
    function showModal(videoElement) {
      const src = videoElement.src;
      const info = videoElement.getAttribute('data-info');
      const modalVideo = document.getElementById('modalVideo');
      modalVideo.src = src;
      document.getElementById('videoInfo').innerText = info;
      $('#videoModal').modal('show');
    }
  
    $('#videoModal').on('hidden.bs.modal', function (e) {
      const modalVideo = document.getElementById('modalVideo');
      modalVideo.pause();
      modalVideo.src = '';
    });
  
    // Hacer la función showModal global para que pueda ser accedida desde el HTML
    window.showModal = showModal;
  });