//comprobar que atributos tiene un elemento, nos devuelve un boolean
const h1 = document.querySelector("h1");

console.log(h1.hasAttribute("id"));

console.log(h1.hasAttribute("type"));


//para consenguir el valor del atributo 
 console.log(h1.getAttribute("id"));
  
 //coleccion de atributos elemento iterable
 console.log(h1.attributes);
