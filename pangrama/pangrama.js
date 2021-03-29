function pangrama(palabra){
    palabra = palabra.toLowerCase();
    var alfabeto = "abcdefghijklmnñopqrstuvwxyz";
    var arrayAlfabeto = Array.from(alfabeto);
    for(var i in arrayAlfabeto){
        if(palabra.indexOf(arrayAlfabeto[i])==-1){
            return false;
        }
    }
    return true;
}

var verificar = document.getElementById("verificar");
verificar.addEventListener("click", ()=> {
    var palabraIngresada = document.getElementById("palabra").value;
    var respuesta = document.getElementById("respuesta");
    if(pangrama(palabraIngresada)){
        console.log("la palabra es pangrama");   
        return respuesta.innerHTML="la palabra es pangrama";             
    }
    console.log("la palabra no es pangrama");
    return respuesta.innerHTML="la palabra no es  pangrama";    
})

