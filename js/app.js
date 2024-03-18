//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un producto presionando "Agregar al Carrito"
    listaProductos.addEventListener('click', agregarProductos);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarProducto)

    //Muestra los cursos del LocalStorage
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];

        carritoHTML();
    });
    
    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; //Reseteamos el array

        limpiarHTML(); //Eliminamos todo el HTML
    })
}


//Funciones
function agregarProductos(e){
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement
        leerDatosProductos(productoSeleccionado)
    }
}

//Elimina el producto del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        //Elimina del array de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId)

        carritoHTML(); //Iterar sobre el carrito y mostrar el HTML
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la info del curso
function leerDatosProductos(producto) {

    //Crear un objeto con el contenido del producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('p').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( producto => producto.id === infoProducto.id);
    if (existe){
        const productos = articulosCarrito.map( producto =>{
            if (producto.id === infoProducto.id ){
                producto.cantidad++;
                return producto; //Retorna el objeto actualizado
            } else {
                return producto; //Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...productos]
    } else {
        //Agrega elementos al array del carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML 
    articulosCarrito.forEach( producto => {
        const {imagen, titulo, precio, cantidad, id} = producto
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="80">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    //Agregar el carrito de compras al LocalStorage
    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

//Elimina los productos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}



