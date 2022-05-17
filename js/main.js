class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, "Pop It", 195);
const producto2 = new Producto(2, "Spinner", 80);
const producto3 = new Producto(3, "Slime", 120);
const producto4 = new Producto(4, "Squishy", 245);

let productos = [producto1, producto2, producto3, producto4]

let carrito = JSON.parse(localStorage.getItem("productos")) ?? []

let divProductos = document.getElementById('productos')

    productos.forEach(producto => {
        divProductos.innerHTML += `
            <div class="card" id="producto${producto.id}" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio:$${producto.precio}</p>
                    <button id="boton${producto.id}" class="btn btn-light">Agregar al carrito</button>
                </div>
            </div>
            `
    })
    
    productos.forEach(producto => {
        document.getElementById(`boton${producto.id}`).addEventListener('click', () => {
            carrito.push(producto)
            localStorage.setItem("productosCarrito", JSON.stringify(carrito))
        })
    })

