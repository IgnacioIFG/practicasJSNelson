// Ejercicio 1
let edadUsuario = prompt("¿Cúal es tu edad?");

if(edadUsuario %2==0){
    document.getElementById("edad").innerHTML=edadUsuario;
    document.getElementById("parImpar").innerHTML="Su edad es par";
}else{
    document.getElementById("edad").innerHTML=edadUsuario;
    document.getElementById("parImpar").innerHTML="Su edad es impar";
}

 

