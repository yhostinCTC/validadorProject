
function validarTarjetaLuh(numeroTarjeta){
    // 1. Recorrer los numeros de atras a adelante
    let par = false;
    let digitos = []
    for(let i = numeroTarjeta.length - 1; i >= 0 ; i--){
        if(par){
            // 2. Si es mayor a 10 sumar los digitos
            let suma = parseInt(numeroTarjeta[i]) * 2
            if(suma > 9) {suma = suma - 9;}
            digitos.unshift(suma)
            par = !par
        }
        else{
            digitos.unshift(parseInt(numeroTarjeta[i]))
            par = !par
        }
    }

    //3. Sumar todos los digitos
    let sumaTotal = 0;
    for(let i = 0; i < digitos.length; i++){
        sumaTotal += digitos[i]
    }

    //4. Si el resultado es multiplo de 10 es valido
    if(sumaTotal % 10 == 0){
        return("Tarjeta Valida")
    }
    else{
        return("Tarjeta Invalida")
    }
}

export {validarTarjetaLuh};