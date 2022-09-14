var resultado = 0;
var opcion = 0;
var cantidad = 0;
var entrada2 = 0;
let producto = "";
const listaCompra = [];
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
function cuenta (cantidad, precio){
    resultado = resultado + (cantidad * precio);
    alert (`Tu cuenta hasta el momenton = $ ${resultado}`);
}
function parcial (cantidad, precio){
    resultado2 = cantidad * precio;
}
producto1.listado();
producto2.listado();
producto3.listado();
producto4.listado();
let entrada = prompt (`Nuestros productos ${("\n")}${listaprodutos.join("\n")}${("\n")}¿Desea adquirir uno de nuestros articulos? SI / NO`);
while (entrada != "NO" && (entrada === "SI" || entrada === "Si" || entrada === "si")) { 
    do {
        opcion = prompt (`Introduce el numero de la opcion que quieres comprar: ${("\n")} 1.- ${producto1.nombre} ${("\n")} 2.- ${producto2.nombre} ${("\n")} 3.- ${producto3.nombre} ${("\n")} 4.- ${producto4.nombre}`);
        if (opcion >= 0){
            cantidad = prompt ("¿Cuantas quieres?");
            if (cantidad >= 0){
                switch (opcion){
                    case "1":
                        precio = producto1.precio;
                        producto = producto1.nombre;
                        break;
                    case "2":
                        precio = producto2.precio;
                        producto = producto2.nombre;
                        break;
                    case "3":
                        precio = producto3.precio;
                        producto = producto3.nombre;
                        break;
                    case "4":
                        precio = producto4.precio;
                        producto = producto4.nombre;
                        break;
                }
                cuenta (cantidad, precio);
                parcial (cantidad, precio);  
            }else{
                alert("No ingresaste un numero");
            }
        }
        else{
            alert("No ingresaste un numero");
        }
        let mensaje2 = (cantidad + " " + producto + " $" + precio);
        listaCompra.push (mensaje2.toUpperCase());
        let comprado = document.createElement("div");
        comprado.innerHTML = `<h3> ${cantidad} ${producto} ${resultado2} </h3>`;
        document.body.appendChild(comprado);
        entrada2 = prompt ("Deseas agregar otro producto 1. SI 2. NO 'Teclea el numero");
        if (entrada2 == "2"){
            entrada = "NO";
            let todo = document.getElementById("compras");
            todo.innerHTML = `<h2> Su total a pagar es: $${resultado} pésos </h2>`;
        }
    }while (entrada2 != "2" && entrada2 === "1");
}   