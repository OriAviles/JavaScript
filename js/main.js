let producto1 = prompt("Ingrese el producto #1");
let producto2 = prompt("Ingrese el producto #2");
let producto3 = prompt("Ingrese el producto#3");

let valorProducto1 = parseInt(prompt("ingrese el valor del producto  #1"));

while (isNaN(valorProducto1)){
    valorProducto1 = parseInt(prompt("Ingrese el valor del producto #1"))
}

let valorProducto2 = parseInt(prompt("ingrese el valor del producto  #2"));

while (isNaN(valorProducto2)){
    valorProducto2 = parseInt(prompt("Ingrese el valor del producto #2"))
}

let valorProducto3 = parseInt(prompt("ingrese el valor del producto  #3"));

while (isNaN(valorProducto3)){
    valorProducto3 = parseInt(prompt("Ingrese el valor del producto #3"))
}

console.log("Detalle de su pedido")


console.log(producto1, ".......$", valorProducto1)

console.log(producto2, ".......$", valorProducto2)

console.log(producto3, ".......$", valorProducto3)


console.log("Su total el de: $", valorProducto1 + valorProducto2 + valorProducto3)
