const nombre = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");
alert(`Bienvenido ${nombre} ${apellido}.`)

alert("Eligue los dispositivos que deseas sumar al carrito")

let productoEscogido = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"));
let carrito = 0
let seguirComprando = true
let decision

const productosExistentes = []

class Producto{
    constructor(id, nom, precio){
        this.id = id
        this.nom = nom
        this.precio = precio
    }
}

const iphone = new Producto(1, "iPhone", 300)
productosExistentes.push(iphone)
const notebook = new Producto(2, "Notebook", 500)
productosExistentes.push(notebook)
const pc = new Producto(4, "Pc", 700)
productosExistentes.push(pc)
const ps5 = new Producto(5, "Ps5", 800)
productosExistentes.push(ps5)
const xbox = new Producto(6, "Xbox X", 800)
productosExistentes.push(xbox)

while(seguirComprando === true){
    
    const productoCliente = productosExistentes.find(producto => producto.id === productoEscogido)

    if(productoCliente){
        carrito = carrito + productoCliente.precio
    } else {
        productoEscogido = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"))
        continue
    }

    decision = parseInt(prompt("Quiere seguir comprando? 1-Si 2-No"))
    if(decision === 1){
        productoEscogido = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"))
    } else {
        seguirComprando = false
    }
}

alert(`${nombre}, el total de tu carrito es ${carrito}`)

let contacto = prompt("Gracias por confiar en nosotros! A continuacion deje su numero y nos pondremos en contacto con usted para finalizar la compra")