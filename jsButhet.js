class producto{
    contructor(id, color,precio, stock){
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }
}

const listaProductos = [    {id:1, modelo:"Vans Old Skool",  precio:15000, stock:21},
                            {id:2, modelo:"Nike Blazer", precio:25000, stock:22},
                            {id:3, modelo:"Jordan 1",   precio:40000, stock:23},
]

let productoSeleccionado;
let elegirNuevoProducto;
let sinStock;
const carritoCompras = [];
let cantidadCompra;


alert("Bievenido a nuestra tienda");
compra()
while(elegirNuevoProducto.toUpperCase() == "SI") {
    compra()
}
console.log(carritoCompras)
finCompra(cantidadCompra)
// ESTE ES EL FINAAL

function compra(){
    let idCompra = prompt("¿Que zapatilla desea? \n 1. Vans Old Skool \n 2. Nike Blazer \n 3. Jordan 1");                                                                  
    while (idCompra <= 0 || idCompra > 3 || isNaN(idCompra) ){
        idCompra = prompt("Que zapatilla desea? \n 1. Vans Old Skool \n 2. Nike Blazer \n 3. Jordan 1");
    }
    productoExistente = productoEncontrado(idCompra)
    if(productoExistente){
        validacionStock2(productoExistente.stock)
        while(sinStock.toUpperCase() == "SI") {
            validacionStock2(productoExistente.stock)
        }
    }
    else{
        alert("Ese producto no existe! vuelva a intentar")
        elegirNuevoProducto = "SI"
    }
}

function productoEncontrado(productoIngresado){
    let productoValidado = listaProductos.find( e => e.id == productoIngresado)
    if(productoValidado)
    {
        return productoValidado
    }
    else
    {
        return false
    }
}

function validacionStock2(cantidadStock){
    let cantidadCompra =parseInt(prompt("¿Cuantas va a llevar?"))

    if (cantidadStock >= cantidadCompra){
        productoExistente.stock = cantidadCompra
        sinStock= "NO"
        bucle()
    }else{
        alert("No tenemos suficiente stock del producto, vuelva a intentar")
        sinStock= "SI"
    }
}

function bucle(){ 
    let agregar = prompt("¿Desea agregar el producto al carrito? SI / NO")       
    if(agregar.toUpperCase() == "SI")
    {
        carritoCompras.push(productoExistente)
        elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")
    }else{
        elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")
    }
}

function finCompra(){
    console.log("Productos:")
    for(let i = 0; i<carritoCompras.length ; i++){
        console.log("Zapatilla: " + carritoCompras[i].modelo + ". Cantidad: " + carritoCompras[i].stock)
    }
}
