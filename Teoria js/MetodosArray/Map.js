//devuelve un array transformando los elemtnos que hay en un array 

const numeros = [1,2,3,4,5,6];

 const doble = function(numero){
    return numero *2
 }

 const numerosDobles = numeros.map(doble);
 console.log(numerosDobles);