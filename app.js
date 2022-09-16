const listaprodutos = [];
function productos (nomprod, precio, departamento){
    this.nombre = nomprod;
    this.precio = precio;
    this.departamento = departamento;

    this.listado = function (){
        let mostrar = (this.nombre + " precio $" + this.precio);
        listaprodutos.push (mostrar.toUpperCase());
    }
}
const producto1 = new productos("Laptop 18 pulgadas", 16000, "computo");
const producto2 = new productos("Teclado", 250, "computo");
const producto3 = new productos("Silla", 2500, "oficina");
const producto4 = new productos("Escritorio", 4000, "oficina");
let prod1 = document.getElementById("uno");
prod1.innerHTML = `<h2> ${producto1.nombre} $${producto1.precio} ${producto1.departamento} </h2>`;
let prod2 = document.getElementById("dos");
prod2.innerHTML = `<h2> ${producto2.nombre} $${producto3.precio} ${producto2.departamento} </h2>`;
let prod3 = document.getElementById("tres");
prod3.innerHTML = `<h2> ${producto3.nombre} $${producto3.precio} ${producto3.departamento} </h2>`;
let prod4 = document.getElementById("cuatro");
prod4.innerHTML = `<h2> ${producto4.nombre} $${producto4.precio} ${producto4.departamento} </h2>`;
producto1.listado();
producto2.listado();
producto3.listado();
producto4.listado();

const formulario = document.querySelector("form");
const nom = document.querySelector("#inputNombre");
const ape = document.querySelector("#inputApellido4");
const str = document.querySelector("#inputAddress");
const cty = document.querySelector("#inputCity");
const sta = document.querySelector("#inputState");
const zip = document.querySelector("#inputZip");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(){
    event.preventDefault();
    let nom1 = document.getElementById("Nombre");
    nom1.innerHTML = `<h2>Nombre: ${nom}</h2>`;
    let ape1 = document.getElementById("Apellido");
    ape1.innerHTML = `<h2>Apellido: ${ape}</h2>`;
    let str1 = document.getElementById("Calle");
    str1.innerHTML = `<h2>Calle: ${str}</h2>`;
    let cty1 = document.getElementById("Ciudad");
    cty1.innerHTML = `<h2>Ciudad: ${cty}</h2>`;
    let sta1 = document.getElementById("Estado");
    sta1.innerHTML = `<h2>Estado: ${sta}</h2>`;
    let zip1 = document.getElementById("CP");
    zip1.innerHTML = `<h2>C.p.: ${zip}</h2>`;
    console.log(nom);
}