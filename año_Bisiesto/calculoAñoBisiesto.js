function leapyear(year){
    
    if((year%4==0) && (year%100!=0)){
        return true;
    }
    if((year%100==0) && (year%400==0)){
        return true;
    }
    return false;
}

var aceptar=document.getElementById('boton');
aceptar.addEventListener("click", ()=> {
    var yearE= document.getElementById("yearEntered").value;
    var yearInt= parseInt(yearE);
    var answer = document.getElementById("answer");
    if(!isNaN(yearInt) && yearInt>0){
        if(leapyear(yearInt)){
            return answer.textContent= "el año ingresado es bisiesto";            
        }
        return answer.textContent= "el año ingresado no es bisiesto";
        
    }
    if(yearInt==0){
        return answer.textContent= "el año 0 no existe en el calendario gregoriano";
    }
    if(yearInt<0){
        return answer.textContent= "ingrese un número positivo";
    }
    answer.textContent= "Ingrese un número";
    
})
