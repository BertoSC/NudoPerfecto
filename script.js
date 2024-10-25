let contador = 0;

function agregarAlCarrito(nombre, precio, idCantidad) {
    const cantidadSeleccionada = document.getElementById(idCantidad).value;
    contador += parseInt(cantidadSeleccionada); 
    document.getElementById('contador-carrito').innerText = contador; 
    document.getElementById('contador-carrito').style.display = 'inline-block'; 
    
}


var modal = document.getElementById("modalCarrito");
var btnCarrito = document.getElementById("iconoCarrito"); 
var span = document.getElementsByClassName("close")[0];


btnCarrito.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}