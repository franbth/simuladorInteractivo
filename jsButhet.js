const lista = document.querySelector('#lista');

fetch('./data.json')
    .then (response => response.json())
    .then(json=> {
        const posts = json;
        posts.forEach(post => {
            const li= document.createElement('li');
            li.innerHTML= `
            <div class="${post.clase}">
            <img src="${post.img} " width="100px >
            <p class="articulo">${post.precio}</p>
            <button type="button" id="${post.boton}">Agregar al carrito</button>
            </div>
            `;
            lista.append(li)
        });
    })




let vans = document.querySelector('#vans');
let nike = document.querySelector('#nike');
let jordan = document.querySelector('#jordan');
let carro = document.querySelector('#carro');
let compra = document.querySelector('#compra');


let obj1 = document.querySelector('.objeto1');
let obj2 = document.querySelector('.objeto2');
let obj3 = document.querySelector('.objeto3');
let obj4 = document.querySelector('.objeto4');



let cv=0;
let cn=0;
let cj=0;



vans.addEventListener('click', () => {
    cv++;
    localStorage.setItem('cvans', cv);
    let descrip1 = document.createElement ("p");
    descrip1.innerText=(localStorage.getItem('cvans') + " articulo agregado/s al carrito.");
    obj1.append(descrip1);
});

nike.addEventListener('click', () => {
    cn++;
    localStorage.setItem('cnike', cn);
    let descrip2 = document.createElement ("p");
    descrip2.innerText=(localStorage.getItem('cnike') + " articulo agregado/s al carrito.");
    obj2.append(descrip2);
});

jordan.addEventListener('click', () => {
    cj++;
    localStorage.setItem('cjordan', cj);
    let descrip3 = document.createElement ("p");
    descrip3.innerText=(localStorage.getItem('cjordan') + " articulo agregado/s al carrito.");
    obj3.append(descrip3);
});

carro.addEventListener('click', () => {
    let descrip4 = document.createElement ("p");
    descrip4.innerText=(`Carrito: \nVans: ${localStorage.getItem('cvans')}articulo/s.\nNike: ${localStorage.getItem('cnike')}articulo/s.\n Jordan:${localStorage.getItem('cjordan')}articulo/s.`);
    obj4.append(descrip4);
});

compra.addEventListener('click', () => {
    Swal.fire({
        title: 'Compra exitosa',
        icon:'success',
        confirmButtonText: 'Continuar'
    });
});





/* class producto{
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
 */
