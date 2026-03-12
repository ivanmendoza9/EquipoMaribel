// FABRICA ABSTRACTA

class RestauranteFactory{
crearPlato(){}
crearBebida(){}
crearPostre(){}
}


// RESTAURANTE CHINO

class RestauranteChino extends RestauranteFactory{

crearPlato(){
return{
nombre:"Chow Mein",
precio:"$120 MXN",
img:"chowmein.jpg",
descripcion:"Fideos salteados con verduras frescas y salsa de soya, llenos de sabor oriental."
};
}

crearBebida(){
return{
nombre:"Té Jazmín",
precio:"$40 MXN",
img:"tejazmin.jpg",
descripcion:"Té tradicional chino aromatizado."
};
}

crearPostre(){
return{
nombre:"Rollito dulce",
precio:"$60 MXN",
img:"rollito.jpg",
descripcion:"Crujiente por fuera y dulce por dentro, relleno con un suave toque de azúcar y canela."
};
}

}


// RESTAURANTE JAPONES

class RestauranteJapones extends RestauranteFactory{

crearPlato(){
return{
nombre:"Ramen",
precio:"$150 MXN",
img:"ramen.jpg",
descripcion:"Caldo caliente con fideos suaves, acompañado de carne, huevo y verduras con auténtico sabor japonés."
};
}

crearBebida(){
return{
nombre:"Sake",
precio:"$50 MXN",
img:"sake.jpg",
descripcion:"Bebida japonesa de arroz fermentado."
};
}

crearPostre(){
return{
nombre:"Dango",
precio:"$70 MXN",
img:"dango.jpg",
descripcion:"Bolitas dulces de arroz."
};
}

}


// RESTAURANTE MEXICANO

class RestauranteMexicano extends RestauranteFactory{

crearPlato(){
return{
nombre:"Tacos de carne asada",
precio:"$45 MXN",
img:"tacos.jpg",
descripcion:"Tortillas con carne asada, guacamole, cebolla y cilantro."
};
}

crearBebida(){
return{
nombre:"Agua de Jamaica",
precio:"$35 MXN",
img:"jamaica.jpg",
descripcion:"Bebida refrescante preparada con flor de jamaica."
};
}

crearPostre(){
return{
nombre:"Pastel tres leches",
precio:"$150 MXN",
img:"tresleches.jpg",
descripcion:"Pastel suave con tres tipos de leche."
};
}

}


// RESTAURANTE ITALIANO

class RestauranteItaliano extends RestauranteFactory{

crearPlato(){
return{
nombre:"Pizza",
precio:"$160 MXN",
img:"Pizza.jpg",
descripcion:"Masa horneada con salsa de tomate y queso derretido, llena de sabor en cada rebanada."
};
}

crearBebida(){
return{
nombre:"Vino tinto",
precio:"$100 MXN",
img:"vino.jpg",
descripcion:"Vino elaborado con uvas fermentadas."
};
}

crearPostre(){
return{
nombre:"Tiramisú",
precio:"$80 MXN",
img:"tiramisu.jpg",
descripcion:"Postre italiano con café y mascarpone."
};
}

}


// RESTAURANTE AMERICANO

class RestauranteAmericano extends RestauranteFactory{

crearPlato(){
return{
nombre:"Hamburguesa",
precio:"$120 MXN",
img:"hamburguesa.jpg",
descripcion:"Jugosa carne a la parrilla con queso derretido, lechuga fresca, tomate y cebolla, acompañada de crujientes papas doradas. ¡Una combinación irresistible llena de sabor!"
};
}

crearBebida(){
return{
nombre:"Refresco",
precio:"$30 MXN",
img:"refresco.jpg",
descripcion:"Refresco gaseoso bien frío, con su inconfundible sabor dulce y burbujeante que refresca al instante y acompaña perfectamente cualquier comida."
};
}

crearPostre(){
return{
nombre:"Cheesecake",
precio:"$75 MXN",
img:"cheesecake.jpg",
descripcion:"Suave y cremoso pastel de queso sobre una base crujiente de galleta, cubierto con fresas frescas y un dulce toque frutal que lo hace irresistible."
};
}

}


// CLIENTE

class Cliente{

constructor(factory){
this.factory = factory;
}

generarMenu(){
this.plato = this.factory.crearPlato();
this.bebida = this.factory.crearBebida();
this.postre = this.factory.crearPostre();
}

servirMenu(){

document.getElementById("plato").innerText = this.plato.nombre;
document.getElementById("bebida").innerText = this.bebida.nombre;
document.getElementById("postre").innerText = this.postre.nombre;

document.getElementById("precioPlato").innerText = this.plato.precio;
document.getElementById("precioBebida").innerText = this.bebida.precio;
document.getElementById("precioPostre").innerText = this.postre.precio;

document.getElementById("descPlato").innerText = this.plato.descripcion;
document.getElementById("descBebida").innerText = this.bebida.descripcion;
document.getElementById("descPostre").innerText = this.postre.descripcion;

document.getElementById("imgPlato").src = this.plato.img;
document.getElementById("imgBebida").src = this.bebida.img;
document.getElementById("imgPostre").src = this.postre.img;

}

}


// FUNCION PRINCIPAL

function crearCliente(){

let tipo = document.getElementById("restaurante").value;
let factory;

if(tipo==="chino") factory = new RestauranteChino();
else if(tipo==="japones") factory = new RestauranteJapones();
else if(tipo==="mexicano") factory = new RestauranteMexicano();
else if(tipo==="italiano") factory = new RestauranteItaliano();
else factory = new RestauranteAmericano();

let cliente = new Cliente(factory);

cliente.generarMenu();
cliente.servirMenu();

}

let carrito = [];
let total = 0;

function agregarCarrito(tipo){

let nombre;
let precio;

if(tipo==="plato"){
nombre = document.getElementById("plato").innerText;
precio = document.getElementById("precioPlato").innerText;
}

if(tipo==="bebida"){
nombre = document.getElementById("bebida").innerText;
precio = document.getElementById("precioBebida").innerText;
}

if(tipo==="postre"){
nombre = document.getElementById("postre").innerText;
precio = document.getElementById("precioPostre").innerText;
}

let precioNumero = parseInt(precio.replace("$",""));

carrito.push(nombre);

total += precioNumero;

mostrarCarrito();

}

function mostrarCarrito(){

let lista = document.getElementById("listaCarrito");

lista.innerHTML = "";

carrito.forEach(item => {

let li = document.createElement("li");

li.innerText = item;

lista.appendChild(li);

});

document.getElementById("total").innerText = "Total: $" + total + " MXN";

}

function comprar() {
    if(carrito.length === 0){
        alert("No hay productos en el carrito");
        return;
    }

    // Generar el ticket con mensaje de éxito
    let ticket = "¡Compra exitosa!\n\nProductos:\n";
    carrito.forEach((item, index) => {
        ticket += `${index + 1}. ${item}\n`;
    });
    ticket += `\nTotal a pagar: $${total} MXN`;

    // Mostrar en el modal
    document.getElementById("contenidoTicket").innerText = ticket;
    document.getElementById("modalTicket").style.display = "block";

    // Limpiar carrito y total
    carrito = [];
    total = 0;
    mostrarCarrito();
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modalTicket").style.display = "none";
}

// Cerrar el modal si el usuario hace click fuera de él
window.onclick = function(event) {
    let modal = document.getElementById("modalTicket");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}