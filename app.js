var resultado = 0;
var primer = 0;
var sengundo = 0;
let entrada = prompt ("Escribe 'Calcular' o 'Salir' ");
while (entrada != "Salir" && entrada === "Calcular") { 
        primer = prompt ("Escribe el primer numero");
        if (primer >= 0){
            sengundo = prompt ("Escribe el segundo numero");
            if (sengundo >= 0){
                let operacion = prompt ("Escribe el sibolo de la operacion matetmatica ´+ , -, * o /´");
                switch (operacion){
                    case "+":
                        resultado = primer + sengundo;
                        alert (`El resultado es ${resultado}`);
                        break;
                        case "-":
                        resultado = primer - sengundo;
                        alert (`El resultado es ${resultado}`);
                        break;
                        case "*":
                        resultado = primer * sengundo;
                        alert (`El resultado es ${resultado}`);
                        break;
                        case "/":
                        resultado = primer / sengundo;
                        alert (`El resultado es ${resultado}`);
                        break;
                }
            }else{
                alert("No ingresaste un numero")
            }
        }
        else{
            alert("No ingresaste un numero")
        }
        entrada = prompt ("Escribe 'Calcular' o 'Salir' ");
    }
     