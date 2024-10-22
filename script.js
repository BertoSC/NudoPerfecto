let contador = 0; // Inicializa el contador en 0

function agregarAlCarrito(nombre, precio, idCantidad) {
    const cantidadSeleccionada = document.getElementById(idCantidad).value;
    contador += parseInt(cantidadSeleccionada); // Suma la cantidad seleccionada al contador
    document.getElementById('contador-carrito').innerText = contador; // Actualiza el texto del contador
    document.getElementById('contador-carrito').style.display = 'inline-block'; // Muestra el contador
    // Aquí puedes agregar más lógica para manejar el carrito
}

// Obtener elementos
var modal = document.getElementById("modalCarrito");
var btnCarrito = document.getElementById("iconoCarrito"); // Reemplaza con el ID de tu icono del carrito
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el icono del carrito, abre el modal
btnCarrito.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}