document.addEventListener('DOMContentLoaded', function() {
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

    // Función para mostrar el modal según el ID
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex'; // Mostrar el modal

        // Inicializar el carrusel dentro del modal si es necesario
        const carousel = new bootstrap.Carousel(modal.querySelector('.carousel'), {
            interval: false // No hacer que el carrusel avance automáticamente
        });
    }

    // Asignar eventos de clic a las imágenes de productos
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        const modalId = `myModal${index + 1}`;
        const productImage = product.querySelector('img');

        productImage.addEventListener('click', () => {
            showModal(modalId);
        });
    });

    // Cerrar el modal si se hace clic fuera del contenido
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera del contenido
            }
        });
    });

    // Variables para el carrito de compras
    const cart = [];
    const cartElement = document.getElementById('cart');
    const cartItemsElement = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const toggleCartIcon = document.getElementById('toggle-cart');

    // Función para actualizar el carrito de compras
    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;
        cart.forEach(function(item) {
            const price = parseFloat(item.price);
            if (!isNaN(price)) {
                total += price;
                const li = document.createElement('li');
                li.textContent = `${item.product} - ${item.price}€`;
                cartItemsElement.appendChild(li);
            }
        });
        cartElement.style.display = cart.length > 0 ? 'block' : 'none';

        // Actualizar el total en el HTML
        document.getElementById('total-amount').textContent = total.toFixed(2);
    }

    // Agregar evento al botón de checkout
    checkoutButton.addEventListener('click', function() {
        alert('Checkout: ' + JSON.stringify(cart));
        // Aquí puedes redirigir a una página de pago o procesar el checkout
    });

    // Agregar evento para mostrar/ocultar el carrito al hacer clic en el icono
    toggleCartIcon.addEventListener('click', function() {
        cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
        const toggleCartIcon = document.getElementById('toggle-cart');

function handleToggleCartClick() {
    cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
}

toggleCartIcon.addEventListener('click', handleToggleCartClick);

// Luego, puedes llamar handleToggleCartClick() desde otras partes de tu script si necesitas replicar el mismo comportamiento.

    });
    

    

    // Agregar producto al carrito al hacer clic en el icono de compra
    document.querySelectorAll('.fas.fa-shopping-cart').forEach(function(icon) {
        icon.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = this.getAttribute('data-price');
            const item = { product, price };
            cart.push(item);
            updateCart();
        });
    });

 
    // Hacer la función showModal global para que pueda ser accedida desde el HTML
    window.showModal = showModal;

    // Función para agregar un producto al carrito
    $('.add-to-cart').click(function() {
        const product = $(this).closest('.product');
        const productId = product.data('product-id');
        const productName = product.find('h3').text();
        const productPrice = parseFloat(product.find('.fas.fa-shopping-cart').data('price'));

        // Construir el elemento del carrito
        const cartItem = `<div class="cart-item" data-product-id="${productId}" data-product-price="${productPrice}">
                            <p>${productName} - ${productPrice.toFixed(2)} €</p>
                         </div>`;

        // Añadir al carrito
        $('#cart-items').append(cartItem);

        // Actualizar el carrito y calcular el total
        cart.push({ product: productName, price: productPrice });
        updateCart();
    });
    
});


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
