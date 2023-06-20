let totalProducto = 0;

function carritoDeCompras() {
    let precioProducto = 0;
    let entrada = prompt('Ingrese el precio de un producto para un carrito de compras, al finalizar de agregar todos los precios, escriba "ESC"');
    while (entrada !== 'ESC') {
        precioProducto = parseInt(entrada);
        totalProducto = totalProducto + precioProducto;
        entrada = prompt('Ingrese el precio de un producto para un carrito de compras, al finalizar de agregar todos los precios, escriba "ESC"');
    }
    if (entrada === 'ESC') {
        alert('El precio total de su compra seria de $' + totalProducto)
    }
}

function calculadorDeCuotas() {
    let cuotas = prompt('Si le gustaria realizar el pago en cuotas sin interes (limite de 12 cuotas) y quiere que lo calculemos por usted, escriba "Si"')
    if ((cuotas === 'si') || (cuotas === 'Si') || (cuotas === 'SI')) {
        let numeroDeCuotas = parseInt(prompt('¿En cuantas cuotas le gustaria realizar su pago?'))
        while (numeroDeCuotas > 12) {
            alert('El numero maximo de cuotas es de 12, por favor ingrese un numero entre 1 y 12')
            numeroDeCuotas = parseInt(prompt('¿En cuantas cuotas le gustaria realizar su pago?'))
        }
        let precioConCuotas = totalProducto / numeroDeCuotas
        alert('El precio total de cada una de las cuotas seria de $' + precioConCuotas.toFixed(2) + '. Muchas gracias por comprar en nuestra tienda!')
    } else if  ((cuotas === 'no')||(cuotas === 'NO')||(cuotas === 'No')){
        alert('Entendido. Muchas gracias por visitar nuestra tienda!')
    } else{
        alert('Error: Esta no es una opcion correcta, por favor recargue la pagina si lo necesita.')
    }
}

carritoDeCompras()
calculadorDeCuotas()