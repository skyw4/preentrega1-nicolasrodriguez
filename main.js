
// "CONSTRUCTOR" DE PRODUCTOS
class Producto {
    constructor(nombre, codigo, precio) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
}
let listaProductos = [];

// ADICIÓN DE PRODUCTOS
listaProductos.push(new Producto('Cemento', 'CL', 1250))
listaProductos.push(new Producto('Cal Cacique', 'CC', 1050))
listaProductos.push(new Producto('Ladrillos Huecos del 12', 'LH12', 88))
listaProductos.push(new Producto('Ladrillos Huecos del 8', 'LH8', 74))
listaProductos.push(new Producto('Plasticor', 'PL', 1190))
listaProductos.push(new Producto('Adhesivo para Ceramicas "CONSTRUKOR"', 'ACC', 990))
listaProductos.push(new Producto('M^2 de Arena', 'AR1', 3900))
listaProductos.push(new Producto('1/2 M^2 de Arena', 'AR2', 2200))
listaProductos.push(new Producto('1 y 1/2 M^2 de Arena', 'AR3', 5900))
listaProductos.push(new Producto('M^2 de Piedra Picada', 'PP1', 6000))
listaProductos.push(new Producto('1/2 M^2 de Piedra Picada', 'PP2', 3800))
listaProductos.push(new Producto('1 y 1/2 M^2 de Piedra Picada', 'PP3', 9550))
console.log(listaProductos)

// Funcion para que el usuario pueda ver una lista de los productos
function mostrarProductos(listaProductos) {
    alert('Gracias por interesarte en nuestros productos. Comprando en nuestra web tenes un 15% de descuento! \n Para que no tengas que calcularlo, lo hicimos por vos ;) ')
    for (const producto of listaProductos) {
        let precioDescuento = Math.round(producto.precio * 0.85);
        let contenedor = document.createElement('div');
        contenedor.innerHTML = `<h3> Producto: ${producto.nombre}</h3>
                                    <p>  Precio: $${producto.precio}</p>
                                    <b>  Precio con descuento: $${precioDescuento}</b>`
        document.body.appendChild(contenedor);
    }
} 


let verProductos = prompt('¿Desea ver la lista de productos? Responder con "Si" o "No"')
if ((verProductos === 'si') || (verProductos === 'Si') || (verProductos === 'SI')) {
    mostrarProductos(listaProductos)
} else if (((verProductos === 'no') || (verProductos === 'NO') || (verProductos === '   NO'))) {
    alert('No hay problema! Si quiere ver la lista de productos en un futuro, recargue la pagina')
}




let totalProducto = 0;

// funcion para calcular el precio total de una compra/carrito de compras
function carritoDeCompras() {
    let precioProducto = 0;
    let entrada = prompt('Ingrese el precio de su producto del carrito de compras, al finalizar de agregar todos los precios, escriba "ESC"');
    while (entrada !== 'ESC') {
        precioProducto = parseInt(entrada);
        totalProducto = totalProducto + precioProducto;
        entrada = prompt('Ingrese el precio de su producto del carrito de compras, al finalizar de agregar todos los precios, escriba "ESC"');
    }
    if (entrada === 'ESC') {
        alert('El precio total de su compra seria de $' + totalProducto)
    }
}
carritoDeCompras()

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
let cuotas = prompt('Si le gustaria realizar el pago en cuotas sin interes (limite de 12 cuotas) y quiere que lo calculemos por usted, escriba "Si", en caso contrario, escriba "No"')
if ((cuotas === 'si') || (cuotas === 'Si') || (cuotas === 'SI')) {
    calculadorDeCuotas()
} else if ((cuotas === 'no') || (cuotas === 'NO') || (cuotas === 'No')) {
    alert('Entendido. Muchas gracias por visitar nuestra tienda!')
} else {
    alert('Error: Esta no es una opcion correcta, por favor recargue la pagina si lo necesita.')
}

function OrdenarPorPrecio() {
    let ordenarPrecio = listaProductos.sort((a, b) => a.precio - b.precio)
    console.log(ordenarPrecio)
}
let ordenPrecios = prompt('¿Desea ordenar los productos por precio de menor a mayor? Responder con "Si" o "No"')
if ((ordenPrecios === 'si') || (ordenPrecios === 'Si') || (ordenPrecios === 'SI')) {
    OrdenarPorPrecio()
} else if (((ordenPrecios === 'no') || (ordenPrecios === 'NO') || (ordenPrecios === '   NO'))) {
    alert('De acuerdo, no hay problema! Que tenga un buen dia!')
} else {
    alert('Error: Esta no es una opcion correcta.')
}

