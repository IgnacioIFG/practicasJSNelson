//añadir contenido con innerHTML
//No es recomendable por el malware

const board = document.querySelector(".board");
board.innerHTML="<div><p>Item 1</p><p>Item 2</p><p>Item 3"

//con inner text solo vemos el texto pero respeta el css, (Tiene prioridades)
const span = document.querySelector("#mainSpan")
console.log(span.innerHTML);

console.log(span.innerText);

console.log(span.textContent);

//cambio el contenido del span
span.textContent = "Rayo 2 Barsa 1";

