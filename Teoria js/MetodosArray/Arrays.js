var cars = ["seat", "bmw", "ferrari"];
console.log(cars);

//acceder a la ultima posicion
console.log(cars[0]);

//acceder al ultima posicion del array
console.log(cars[cars.length -1]);

//bucle que recorre el array
for (var i=0; i<cars.length; i++){
    console.log(cars[i]);
}

//funcion for each para recorrer un array
function mostrarElemetoConsola(item, index){
    console.log("Mostrando marca de coche: " + item + ", en posicion de array: " + index);
    
}

cars.forEach(mostrarElemetoConsola);

//metodos de array mas raros, funciones flecha etc

//añadir elementos
 var colores = ["amarillo", "rojo", "azul"];
 colores[3]="verde";
 console.log(colores);

 colores[colores.length-1]="morado";
 console.log(colores);

 //añadir un elemetno array (sin sobreescribir el anterior)
 colores.push("marron");
 console.log(colores);

 //eliminar un elemetno, ponemos el splice, el cero indica el numero que quiero borrar y el 1 indica cuantos quiero borrar
 colores.splice(0,1);
 console.log(colores);

 //pa borrar el ultimo
 colores.splice(-1,1);
 console.log(colores);

 //modificar 
 colores.splice(-1,1, "FranjiRojo");
 console.log(colores);

 