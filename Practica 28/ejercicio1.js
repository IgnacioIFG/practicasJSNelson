//Ejercicio 1

const colors = ["Azul", "verde","Rojo","Morado","Negro",];
console.log(colors[0]);
console.log(colors[colors.length-1]);

//Ejercicio 2
const ciudades = [];

var numeroCiu = parseInt(prompt("¿Cúantas ciudades desea añadir?"));

for(var i=0; i<numeroCiu; i++){
    ciudades.push(prompt((i+1) + ". Introduzca una ciudad"));
}
for(var i=0; i<numeroCiu; i++){
    alert(ciudades);
}

//ejercicio 3

const likes = [];
const cont=0;

function mostrarLikes(likes){
  switch(likes.length){
    case likes.length == 0:
        console.log("Nadie ha dado like");
    break;

    case likes.length === 1:
        console.log("Nadie ha dado like");
    break;
    case likes.length === 3:
        console.log("Nadie ha dado like");
    break;
    case likes.length > 3:
        console.log("Nadie ha dado like");
    break;

  }
    

}