
// "CONSTRUCTOR" DE PRODUCTOS
class Producto {
    constructor(nombre, codigo, precio, orden) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.orden = orden;
    }
}
let listaProductos = [];

// ADICIÓN DE PRODUCTOS
listaProductos.push(new Producto('Cemento', 'CL', 1250, 1))
listaProductos.push(new Producto('Cal Cacique', 'CC', 1050, 2))
listaProductos.push(new Producto('Ladrillos Huecos del 12', 'LH12', 88, 3))
listaProductos.push(new Producto('Ladrillos Huecos del 8', 'LH8', 74, 4))
listaProductos.push(new Producto('Plasticor', 'PL', 1190, 5))
listaProductos.push(new Producto('Adhesivo para Ceramicas "CONSTRUKOR"', 'ACC', 990, 6))
listaProductos.push(new Producto('M^2 de Arena', 'AR1', 3900, 7))
listaProductos.push(new Producto('1/2 M^2 de Arena', 'AR2', 2200, 8))
listaProductos.push(new Producto('1 y 1/2 M^2 de Arena', 'AR3', 5900, 9))
listaProductos.push(new Producto('M^2 de Piedra Picada', 'PP1', 6000, 10))
listaProductos.push(new Producto('1/2 M^2 de Piedra Picada', 'PP2', 3800, 11))
listaProductos.push(new Producto('1 y 1/2 M^2 de Piedra Picada', 'PP3', 9550, 12))
console.log(listaProductos)

// Lista ordenada segun los precios de menor a mayor
    let listaOrdenadaPorPrecio = listaProductos.sort((a, b) => a.precio - b.precio)
    console.log(listaOrdenadaPorPrecio)

function listaDeProductos(){
    for (const producto of listaProductos) {
        let precioDescuento = Math.round(producto.precio * 0.85);
        let contenedor = document.createElement('div');
        contenedor.innerHTML = `<h3> Producto: ${producto.nombre}</h3>
                                    <p>  Precio: $${producto.precio}</p>
                                    <b>  Precio con descuento: $${precioDescuento}</b>
                                    <p>ID: ${producto.orden}</
                                    <br>
                                    <button id="${producto.orden}"  class="button">Agregar al carrito</button>`
        contenedor.style.border = '2px solid grey'
        contenedor.style.padding = '15px'
        contenedor.style.margin = '15px'
        document.body.appendChild(contenedor)
    }
}

function listaOrdenPrecios(){
    for (const producto of listaOrdenadaPorPrecio) {
        let precioDescuento = Math.round(producto.precio * 0.85);
        let contenedor = document.createElement('div');
        contenedor.innerHTML = `<h3> Producto: ${producto.nombre}</h3>
                                    <p>  Precio: $${producto.precio}</p>
                                    <b>  Precio con descuento: $${precioDescuento}</b>
                                    <p>ID: ${producto.orden}</
                                    <br>
                                    <button id="${producto.orden}"  class="button">Agregar al carrito</button>`
        contenedor.style.border = '2px solid grey'
        contenedor.style.padding = '15px'
        contenedor.style.margin = '15px'
        document.body.appendChild(contenedor)
    }
}

let ordenPrecios = prompt('¿Desea ordenar los productos por precio de menor a mayor? Responder con "Si" o "No"')
if ((ordenPrecios === 'si') || (ordenPrecios === 'Si') || (ordenPrecios === 'SI')) {
    listaOrdenPrecios()
} else if (((ordenPrecios === 'no') || (ordenPrecios === 'NO') || (ordenPrecios === '   NO'))) {
    alert('De acuerdo, no hay problema! Aqui esta la lista de precios por orden predeterminado.');
    listaDeProductos()
} else {
    alert('Error: Esta no es una opcion correcta.')
}




// Carrito de Compras:

let carrito = []

let botones = document.getElementsByClassName('button')
for (const boton of botones) {
    boton.onclick = () => {
        let productoElegido = listaProductos.find((producto) => producto.orden === parseInt(boton.id))
    console.log(`Se agrego ${productoElegido.nombre} al carrito`)
    carrito.push(productoElegido)    
    }
}
let finalizarCompra = document.createElement('button')
finalizarCompra.innerText = 'Finalizar'
finalizarCompra.onclick = () => {
    console.log(`Gracias por confiar en nosotros! En su carrito hay un total de: ${carrito.length} productos`)
}
document.body.appendChild(finalizarCompra)



let totalProducto = 0;

// creo la funcion para calcular las cuotas
function calculadorDeCuotas() {
    let numeroDeCuotas = parseInt(prompt('¿En cuantas cuotas le gustaria realizar su pago?'))
    while (numeroDeCuotas > 12) {
        alert('El numero maximo de cuotas es de 12, por favor ingrese un numero entre 1 y 12')
        numeroDeCuotas = parseInt(prompt('¿En cuantas cuotas le gustaria realizar su pago?'))
    }
    let precioConCuotas = totalProducto / numeroDeCuotas
    alert('El precio total de cada una de las cuotas seria de $' + precioConCuotas.toFixed(2) + '. Muchas gracias por comprar en nuestra tienda!')
}

// antes de ejecutarla le pregunto al usuario si le gustaria calcular el pago en cuotas, de ser asi ejecuto la funcion, y en caso contrario, realizo una salida por alert respondiendo al usuario
/* let cuotas = prompt('Si le gustaria realizar el pago en cuotas sin interes (limite de 12 cuotas) y quiere que lo calculemos por usted, escriba "Si", en caso contrario, escriba "No"')
if ((cuotas === 'si') || (cuotas === 'Si') || (cuotas === 'SI')) {
    calculadorDeCuotas()
} else if ((cuotas === 'no') || (cuotas === 'NO') || (cuotas === 'No')) {
    alert('Entendido. Muchas gracias por visitar nuestra tienda!')
} else {
    alert('Error: Esta no es una opcion correcta, por favor recargue la pagina si lo necesita.')
} */



