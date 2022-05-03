class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const popIt = new Producto(1, "Pop It", 195);
const spinner = new Producto(2, "Spinner", 80);
const slime = new Producto(3, "Slime", 120);
const squishy = new Producto(4, "Squishy", 245);
const productos = [popIt, spinner, slime, squishy]
const carrito = [];
let productoElegido;

const container = document.querySelector(".container");

const saludar = () => {
    alert("Bienvenido a Pequeñeces Sugar");
    const nombre = prompt("Ingrese su nombre:  ");
    container.innerHTML = `<h1>Bienvenido ${nombre}</h1>`;
}

const consultarProductos = () => {
    let texto = "";
    for (const p of productos) {
        texto += `${p.id}) ${p.nombre}\n`
    }
    let prod = parseInt(prompt(`Que producto quieres agregar al carrito? :\n${texto} `));
    while (prod > 4  || prod < 1 ||  isNaN(prod)) {
        prod = parseInt(prompt(`Que producto quieres agregar al carrito? :\n${texto} `));
}
return prod;
};

const llevarProducto = () => {
    let buscarProducto = productos.find(
      (element) => element.id === productoElegido
    );

    let existe = carrito.some((e) => e.id === productoElegido);

    if (existe) {
      buscarProducto.cantidad++;
    } else {
      buscarProducto.cantidad = 1;
      carrito.push(buscarProducto);
    }
  
    let seguir = confirm("Desea agregar otro producto al carrito?");
  
    if (seguir) {
      productoElegido = consultarProductos();
      llevarProducto();
    } else {
      alert("Si desea salir de la tienda presione aceptar");
  }
  }
  
  const mostrarProductos = () => {
    const divCaja = document.createElement("div");
    divCaja.className = "caja";
    container.appendChild(divCaja);
  
    carrito.forEach((element) => {
      divCaja.innerHTML += `<div class="cajita">
      <p>${element.nombre.toUpperCase()}</p>
      <p>c/u $${element.precio}</p>
      <p>Cantidad: ${element.cantidad}</p>
      <h3>Subtotal: $${element.precio * element.cantidad}</h3>
      </div>`;
    });
  };
  
  const calcularTotal = () => {
    let cajaTotal = document.createElement("div");
    cajaTotal.className = "cajita";
    let total = carrito.reduce((acc, ite) => acc + ite.precio * ite.cantidad, 0);
  
    cajaTotal.innerHTML = `<h2>El total es de: $${total}</h2>`;
  
    container.appendChild(cajaTotal);
  };
  
  saludar();
  productoElegido = consultarProductos();
  llevarProducto();
  mostrarProductos();
  calcularTotal();