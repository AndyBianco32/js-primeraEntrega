// Mi Veterinaria - E-comerce

alert("Bienvenidos a Mi Veterinaria!!!")

let nombre = prompt("Ingrese su nombre").toUpperCase()
alert("Hola " + nombre + " , te invito a chequear mi Vet Shop y sorprendete!");

alert("ANTES QUE NADA " + nombre  + " TIENES QUE SABER QUE: Suscribiéndote te llevas un cupón de descuento de 3€ en tu segunda compra de nuestros productos de la marca PEPITOS Vet Shop.")


alert("Quieres obtener el cupon?")
let opcion = Number(prompt("Ingresa tu respuesta : \n1 si \n2 no"))
if (opcion !==  1) {
    alert("Gracias por responder, puedes continuar con tu visita")
 }
if (opcion === 1) { 
    alert("ingresa los siguientes datos:")
    let email = prompt("Ingresa tu email")
    let mascota = prompt ("Elige tu mascota:\n1 Perro \n2 Gato \n3 Aves \n4 Reptil \n5 Roedor")

    while (email.length === 0 || mascota.length === 0){
        email = prompt("Ingresa tu email")
        mascota = prompt ("Elige tu mascota:\n1 Perro \n2 Gato \n3 Otro")
    }
    if (email !== "" || mascota !== ""){
        alert("Lo lograste! Estas suscripto. Ya tienes tu Cupon de descuento que sera enviada a tu email registrado.")
    }
   
    
}

 

alert("Vamos a la tienda..")


function micarrito(comida, precioPorKilo, total) {
    let cantidad = Number(prompt("Ingrese cantidad del producto"))
    let subtotal = precioPorKilo * cantidad 
    total = total + subtotal
    alert("Se añadio " + comida + " al carrito por un total de: " + subtotal)
    return total
}

function compras() {
    let listaalimentos
    let total = 0
    do {
        listaalimentos = Number(prompt("Seleccione su alimento favorito:\n1 pedigree $70\n2 eukanuba $80\n3 huesitos $95\n4 caritos $55\n0 omitir"))
        if (listaalimentos < 0 || listaalimentos > 4) {
            alert("Opcion ingresada incorrecta")
        } else if (listaalimentos === 1) {
            total = micarrito("pedigree", 70, total)
        } else if (listaalimentos === 2) {
            total = micarrito("eukanuba", 80, total)
        } else if (listaalimentos === 3) {
            total = micarrito("huesitos", 95, total)
        } else if (listaalimentos === 4) {
            total = micarrito("caritos", 55, total)
        }
    } while (listaalimentos !== 0)
    
    alert("El total de su compra es de " + total)
}

compras()

alert("Continuemos con las compras..")

function compras2() {
    let listaentretenimiento
    let total = 0
    do {
        listaentretenimiento = Number(prompt("Seleccione su juguete favorito:\n1 pelota $30\n2 munieco $13\n3 huesogigante $35\n4 choclo $18\n0 omitir"))
        if (listaentretenimiento < 0 || listaentretenimiento > 4) {
            alert("Opcion ingresada incorrecta")
        } else if (listaentretenimiento === 1) {
            total = micarrito("pelota", 30, total)
        } else if (listaentretenimiento === 2) {
            total = micarrito("munieco", 13, total)
        } else if (listaentretenimiento === 3) {
            total = micarrito("huesogigante", 35, total)
        } else if (listaentretenimiento === 4) {
            total = micarrito("choclo", 18, total)
        }
    } while (listaentretenimiento !== 0)
    
    alert("El total de su compra es de " + total)
}

compras2()

alert("Te mostramos accesorios para tu mascota.")

function compras3() {
    let listaaccesorios
    let total = 0
    do {
        listaaccesorios = Number(prompt("Elije tu accesorio segun tu estilo:\n1 collarsimple $16\n2 collarperlas $27\n3 arnesvioleta $32\n4 correanegra $17\n0 omitir"))
        if (listaaccesorios < 0 || listaaccesorios > 4) {
            alert("Opcion ingresada incorrecta")
        } else if (listaaccesorios === 1) {
            total = micarrito("collarsimple", 16, total)
        } else if (listaaccesorios === 2) {
            total = micarrito("collarperlas", 27, total)
        } else if (listaaccesorios === 3) {
            total = micarrito("arnesvioleta", 32, total)
        } else if (listaaccesorios === 4) {
            total = micarrito("correanegra", 17, total)
        }
    } while (listaaccesorios !== 0)
    
    alert("El total de su compra es de " + total)
}

compras3()

alert("Tambien tenemos productos de higiene para mostrarte.")

function compras4() {
    let listahigiene
    let total = 0
    do {
        listahigiene = Number(prompt("Escoge el producto adecuado para tu mascota:\n1 shampoo $14\n2 jabon $7\n3 antiparasitariopipeta $22\n4 antiparasitariotalco $20\n0 omitir"))
        if (listahigiene < 0 || listahigiene > 4) {
            alert("Opcion ingresada incorrecta")
        } else if (listahigiene === 1) {
            total = micarrito("shampoo", 14, total)
        } else if (listahigiene === 2) {
            total = micarrito("jabon", 7, total)
        } else if (listahigiene === 3) {
            total = micarrito("antiparasitariopipeta", 22, total)
        } else if (listahigiene === 4) {
            total = micarrito("antiparasitariotalco", 20, total)
        }
    } while (listahigiene !== 0)
    
    alert("El total de su compra es de " + total)
}

compras4()


function saludodespedida(nombrecliente){
alert("Gracias " + nombre + " por tu visita!")
}
saludodespedida()