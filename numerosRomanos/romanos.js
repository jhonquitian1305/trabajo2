numerosRomanos=(numero)=>{
    let letras=['I','V','X','L','C','D','M'];// Número romanos
    let valores=[1,5,10,50,100,500,1000]// valor que representan

    let cantidad,letra,resultado=[],posicion,letraRespuesta,aux;

    for(let i=6;i>=0;i--){
        letra=letras[i];
        cantidad=valores[i];
        if(numero>=cantidad){
            let n=Math.floor(numero/cantidad);
            numero-=n*cantidad;
            if(n<4){//No pueden haber mas de tres letras repetidas consecutivamente
                while(n>0){
                    resultado.push(letra);//Agregamos las letras al resultado
                    n--;
                }
            }else{
                letraRespuesta=resultado.pop();//extraemos el último valor que hay en el array
                //Calculamos la posición de la letra siguiente
                posicion=(letraRespuesta ? letras.indexOf(letraRespuesta):i)+1;
                //Concatenamos la letra actual con la siguiente(se hace la resta)
                aux=letra+letras[posicion];
                //Agruegamos el valor
                resultado.push(aux);
            }

        }else{
            resultado.push('');
        }
    }
    return resultado.join(' ');
}

var calcular = document.getElementById("convertir");
calcular.addEventListener("click", () => {
    var numeros = document.getElementById("numero").value;
    var parsear = parseInt(numeros);
    var mensajes = document.getElementById("mensaje");
    var resultados = numerosRomanos(parsear);
    mensajes.textContent= "El número ingresado en romanos es: "+ resultados;
})

//console.log(romanNumbers(44));