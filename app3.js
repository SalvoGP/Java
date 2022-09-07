var resultado = 0;
var opcion = 0;
var cantidad = 0;
var entrada2 = 0;
let producto = "";
const listaCompra = [];
function cuenta (cantidad, precio){
    resultado = resultado + (cantidad * precio);
    alert (`Tu cuenta hasta el momenton = $ ${resultado}`);
}
let entrada = prompt ("¿Quieres comer alguna de nuestras opciones? SI / NO Hambuergesa $10, Hotdog $5, pizza $25'");
while (entrada != "NO" && (entrada === "SI" || entrada === "Si" || entrada === "si")) { 
    do {
        opcion = prompt ("Introduce el numero de la opcion que quieres comer: 1.- Hambuergesa $10, 2.- Hotdog $5, 3.-pizza $25'");
        if (opcion >= 0){
            cantidad = prompt ("¿Cuantas quieres?");
            if (cantidad >= 0){
                switch (opcion){
                    case "1":
                        precio = 10;
                        producto = "Hambuerguesa";
                        break;
                    case "2":
                        precio = 5;
                        producto = "HotDog";
                        break;
                    case "3":
                        precio = 25;
                        producto = "Pizza";
                        break;
                }
                cuenta (cantidad, precio); 
            }else{
                alert("No ingresaste un numero");
            }
        }
        else{
            alert("No ingresaste un numero");
        }
        let mensaje = (cantidad + " " + producto + " $" + precio);
        listaCompra.push (mensaje.toUpperCase());
        entrada2 = prompt ("Deseas agregar otro producto 1. SI 2. NO 'Teclea el numero");
        if (entrada2 == "2"){
            alert(`Tu lista de compras es ${("\n")}${listaCompra.join("\n")} ${("\n")} Su total a pagar es: $${resultado} pésos`);
            entrada = "NO";
        }
    }while (entrada2 != "2" && entrada2 === "1");
}
     