const nombre = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");
alert(`Bienvenido ${nombre} ${apellido}.`)

alert("Eligue los dispositivos que deseas sumar al carrito")

let producto = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"));
let carrito = 0
let seguirComprando = true
let decision

while(seguirComprando === true){
    if(producto === 1){
        carrito += 300
    } else if(producto === 2){
        carrito += 500
    } else if(producto === 3){
        carrito += 700
    } else if(producto === 4 || producto === 5){
        carrito += 800
    }

    decision = parseInt(prompt("Quiere seguir comprando? 1-Si 2-No"))
    if(decision === 1){
        producto = parseInt(prompt("1-iPhone 2-Notebook 3-Pc 4-Ps5 5-Xbox X"))
    } else {
        seguirComprando = false
    }
}

alert(`${nombre}, el total de tu carrito es ${carrito}`)

let contacto = prompt("Gracias por confiar en nosotros! A continuacion deje su numero y nos pondremos en contacto con usted para finalizar la compra")