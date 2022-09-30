let listaprodutos = [
    {no: 1, nombre:"Laptop HP 18 pulgadas", precio:16000},
    {no: 2, nombre:"Laptop HP 14 pulgadas", precio:12000},
    {no: 3, nombre:"Laptop lENOVO 18 pulgadas", precio:14000},
    {no: 4, nombre:"Teclado", precio:250},
    {no: 5, nombre:"Silla", precio:2500},
    {no: 6, nombre:"Escritorio", precio:4000}
];
const mostrar = ()=>{
    let caja = document.getElementById("container");
    listaprodutos.forEach((producto,indice)=> {
        let card = document.createElement("div")
        card.classList.add("card","col-sm-12","col-lg-3")
        card.innerHTML = 
        `<div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn-primary" onclick=carrito(${indice})">comprar</a>
        </div>`
        caja.appendChild(card)
    })
}
mostrar()

const formulario = document.querySelector("form");
const nom = document.querySelector("#inputNombre");
const ape = document.querySelector("#inputApellido4");
const str = document.querySelector("#inputAddress");
const cty = document.querySelector("#inputCity");
const sta = document.querySelector("#inputState");
const zip = document.querySelector("#inputZip");

const button = document.querySelector('#btn')
button.addEventListener('click', ()=>{
    Swal.fire({
    title: `Gracias ${nom.value} ${ape.value} por tu compra y sera entreagada 
    en: ${sta.value}, ${cty.value}`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
})

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(){
    event.preventDefault();
    let nom1 = document.getElementById("Nombre");
    nom1.innerHTML = `<h2>Nombre: ${nom.value}</h2>`;
    let ape1 = document.getElementById("Apellido");
    ape1.innerHTML = `<h2>Apellido: ${ape.value}</h2>`;
    let str1 = document.getElementById("Calle");
    str1.innerHTML = `<h2>Calle: ${str.value}</h2>`;
    let cty1 = document.getElementById("Ciudad");
    cty1.innerHTML = `<h2>Ciudad: ${cty.value}</h2>`;
    let sta1 = document.getElementById("Estado");
    sta1.innerHTML = `<h2>Estado: ${sta.value}</h2>`;
    let zip1 = document.getElementById("CP");
    zip1.innerHTML = `<h2>C.p.: ${zip.value}</h2>`;
    console.log(nom);
}