
import {validarTarjetaLuh} from "./modules/algoritmoLuh.js"
import { validadorCantidadDigitos, validadorNumeros } from "./modules/validadores.js";
//console.log(validarTarjeta("4137894711755904"));

let button = document.getElementById("button_validar");



button.addEventListener("click", function(){
    let error = document.getElementById("input_error")
    let numeroTarjeta = document.getElementById("input_tarjeta").value;
    if (validadorCantidadDigitos(numeroTarjeta)){
        error.removeAttribute("hidden");
        error.innerHTML = "La cantidad de digitos es incorrecta";
    }
    else if(validadorNumeros(numeroTarjeta)){
        error.removeAttribute("hidden");
        error.innerHTML = "Solo se permiten numeros";
    }
    else{
        //add hidden to error
        error.setAttribute("hidden", true);
        let resultado = validarTarjetaLuh(numeroTarjeta);
        console.log(resultado);
    }
});


let input_tarjeta = document.getElementById("input_tarjeta");


input_tarjeta.addEventListener("input", function(){
    let numeroTarjeta = document.getElementById("input_tarjeta").value;
    let numeroSvgTarjeta = document.getElementById("svgnumber");

    numeroSvgTarjeta.innerHTML = numeroTarjeta;

})

    










