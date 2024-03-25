//devuelve el primer valor que encuentra CUMPLIENDO la condicion

const numeros = [1,2,3,4];

const encontrarElementos = numeros.find(function(numero){
    return numero > 3;
});

console.log(encontrarElementos);

