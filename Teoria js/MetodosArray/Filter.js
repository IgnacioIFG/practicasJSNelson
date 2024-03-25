//filter es un metodo de array, "todos los elementos que cumpole la condicion se añaden a un nuevo array"

const numeros = [1,2,3,1,2,3,4,5,6];

//hace un array solo con los numeros mayores de 3
const nums = numeros.filter(function(valor){
    return valor > 3;

}); 
console.log(nums);

//ejemplo con objetos
const personajes = [
{id:1, nombre:"Jaime", familia:"Lannister", edad:34},
{id:2, nombre:"Arya", familia:"Stark", edad:11},
{id:3, nombre:"Sansa", familia:"Stark", edad:13},
{id:4, nombre:"Jon", familia:"Snow", edad:25},
{id:5, nombre:"Cesei", familia:"Lannister", edad:34},

];

console.log(personajes);

//filtro para la fdamilia lanister, conun arrray 

const lannister = personajes.filter(function(personaje){
   return personaje.familia === "Lannister";
});

console.log(lannister);

//lo mismo con la flecha
const lannister2 = personajes.filter((personaje) => personaje.familia==="Lannister");
console.log(lannister2);

