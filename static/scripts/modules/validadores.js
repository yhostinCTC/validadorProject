function validadorCantidadDigitos(numeroTarjeta){
    if(numeroTarjeta.length >= 13 && numeroTarjeta.length <= 18){
        return false;
    }
    else{
        return true;
    }
}

function validadorNumeros(numeroTarjeta){
    // verificar que solo sean numeros
    let numeros = "0123456789";
    for(let i = 0; i < numeroTarjeta.length; i++){
        if(!numeros.includes(numeroTarjeta[i])){
            return true;
        }
    }
    return false;
}

export {validadorCantidadDigitos, validadorNumeros};