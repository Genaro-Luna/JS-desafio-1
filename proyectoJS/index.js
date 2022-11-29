const nombreInput = document.getElementById(`nombre`)
const apellidoInput = document.getElementById(`apellido`)
const botonIngresar = document.getElementById(`ingresar`)
const divTitulo = document.getElementById(`divTitulo`)

botonIngresar.onclick = () => {
    if(nombreInput.value || apellidoInput.value){
        const usuario = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
    }
        localStorage.setItem(`usuario`, JSON.stringify(usuario))
        pantallaDeCompra(usuario)
    }
}

function pantallaDeCompra(usuario){
    divTitulo.remove()

    const tituloSaludo = document.createElement(`h2`)
    tituloSaludo.innerText = `Bienvenido ${usuario.nombre} ${usuario.apellido}, dinos que deseas sumar al carrito!`
    divSaludo.append(tituloSaludo)
}

const usuario = JSON.parse(localStorage.getItem(`usuario`))
if(usuario){
    pantallaDeCompra(usuario)
}

class Producto{
    constructor(id, nom, precio){
        this.id = id
        this.nom = nom
        this.precio = precio
    }
}
    
const iphone = new Producto(1, "iPhone", 300)
const notebook = new Producto(2, "Notebook", 500)
const pc = new Producto(3, "Pc", 700)
const ps5 = new Producto(4, "Ps5", 800)
const xbox = new Producto(5, "Xbox X", 800)

const productosExistentes = [iphone, notebook, pc, ps5, xbox]




































// alert("Eligue los dispositivos que deseas sumar al carrito")

// let productoEscogido = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"));
// let carrito = 0
// let seguirComprando = true
// let decision

// const productosExistentes = [iphone, notebook, pc, ps5, xbox]

// class Producto{
//     constructor(id, nom, precio){
//         this.id = id
//         this.nom = nom
//         this.precio = precio
//     }
// }

// const iphone = new Producto(1, "iPhone", 300)
// const notebook = new Producto(2, "Notebook", 500)
// const pc = new Producto(3, "Pc", 700)
// const ps5 = new Producto(4, "Ps5", 800)
// const xbox = new Producto(5, "Xbox X", 800)

// while(seguirComprando === true){
    
//     const productoCliente = productosExistentes.find(producto => producto.id === productoEscogido)

//     if(productoCliente){
//         carrito = carrito + productoCliente.precio
//     } else {
//         productoEscogido = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"))
//         continue
//     }

//     decision = parseInt(prompt("Quiere seguir comprando? 1-Si 2-No"))
//     if(decision === 1){
//         productoEscogido = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"))
//     } else {
//         seguirComprando = false
//     }
// }

// alert(`${nombre}, el total de tu carrito es ${carrito}`)

// let contacto = prompt("Gracias por confiar en nosotros! A continuacion deje su numero y nos pondremos en contacto con usted para finalizar la compra")