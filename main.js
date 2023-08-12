let catalogo = [];

let contenedorConstruccion = document.getElementById('catalogoConstruccion')
let contenedorCeramicas = document.getElementById('catalogoCeramicas')
let contenedorMuebles = document.getElementById('catalogoMuebles')

fetch("./catalogo/construccion.json")
    .then((response) => response.json())
    .then((construccion) => {
            for (const producto of construccion) {
                catalogo.push(producto);
                let contenedor = document.createElement('div')
                contenedor.innerHTML = `
            <img class="img_construccion" src= ${producto.imagen} ></img>
            <h4>${producto.nombre}</h4>
            <p class="price">$${producto.precio}</p>
            <div class="button-container">
            <button id="${producto.id}" class="button boton slice"> <span>Añadir al Carrito</span></button>
            </div>
            `
                contenedor.className = 'product-card'
                contenedorConstruccion.appendChild(contenedor)
            }
    })

fetch("./catalogo/ceramicas.json")
    .then((response) => response.json())
    .then((ceramicas) => {
        for (const producto of ceramicas) {
            catalogo.push(producto);
            let contenedor = document.createElement('div')
            contenedor.innerHTML = `
            <img class="img_ceramicas" src= ${producto.imagen} ></img>
            <h4>${producto.nombre}</h4>
            <p class="price">$${producto.precio}</p>
            <div class="button-container">
            <button id="${producto.id}" class="button boton slice"> <span>Añadir al Carrito</span></button>
            </div>
            `
            contenedor.className = 'product-card'
            contenedorCeramicas.appendChild(contenedor)
        }
    })

fetch("./catalogo/muebles.json")
    .then((response) => response.json())
    .then((muebles) => {
        for (const producto of muebles) {
            catalogo.push(producto);
            let contenedor = document.createElement('div')
            contenedor.innerHTML = `
            <img class="img_muebles" src= ${producto.imagen} ></img>
            <h4>${producto.nombre}</h4>
            <p class="price">$${producto.precio}</p>
            <div class="button-container">
            <button id="${producto.id}" class="button boton slice"> <span>Añadir al Carrito</span></button>
            </div>
            `
            contenedor.className = 'product-card'
            contenedorMuebles.appendChild(contenedor)
        }
    })


// Carrito de Compras:

const carrito = []

let botones = document.getElementsByClassName('button')
for (const boton of botones) {
    boton.onclick = () => {
        let productoElegido = catalogo.find((producto) => producto.id === parseInt(boton.id))
        console.log(`Se agrego ${productoElegido.nombre} al carrito`)
        carrito.push(productoElegido)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
}

console.log(botones)