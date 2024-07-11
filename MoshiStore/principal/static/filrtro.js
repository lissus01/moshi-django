// Función para filtrar productos por categoría
function filtrar(categoria) {
    // Obtenemos todos los productos
    var productos = document.querySelectorAll('.item');

    // Si la categoría es 'todos', mostramos todos los productos
    if (categoria === 'todos') {
        productos.forEach(function(producto) {
            producto.style.display = 'block';
        });
    } else {
        // Ocultamos todos los productos
        productos.forEach(function(producto) {
            producto.style.display = 'none';
        });

        // Mostramos solo los productos de la categoría seleccionada
        var productosCategoria = document.querySelectorAll('.item.' + categoria);
        productosCategoria.forEach(function(producto) {
            producto.style.display = 'block';
        });
    }
}
function filtrooferta(categoria) {
    var items = document.getElementsByClassName('item');
    
    if (categoria === 'todos') {
        // Mostrar todos los productos
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        // Filtrar por categoría
        for (var i = 0; i < items.length; i++) {
            var productoCategoria = items[i].getAttribute('data-categoria');
            if (productoCategoria === categoria) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}

