//no recomendable amigo
const heading = document.querySelector("h1");
heading.style.color = "blue";
heading.style.background = "black";

//permite ver estilos y cambiarlos en la consola
console.log(heading.style.cssText);

//añadir estilos con css text 
heading.style.cssText='background-color:orange; padding:2rem'

//asi se hace la mayoria de las veces, con clases
//vemos que clases tiene asignado cada elemetno con un console
console.log(heading.className);

//para cambiar clases --> ekiminar calses que ya tiene
heading.className = "ruby";
console.log(heading.className);

//para añadir clases se hace con el add
heading.classList.add("bigger")
console.log(heading.className);

//lo que mas se utiliuza es toggle, permite aádir o quitar una clase si la tiene o no la tiene

//como tiene la clase bigger la quita
heading.classList.toggle("bigger");
console.log(heading.className);

//como no la tiene la pone
heading.classList.toggle("bigger");
console.log(heading.className);