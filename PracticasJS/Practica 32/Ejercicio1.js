const btnSubmit = document.querySelector("#btnSubmit");

const formulario = document.querySelector("#form");

const textCamp = document.querySelector("#textCamp");

const parrafo = document.querySelector("#parrafo");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    parrafo.textContent= textCamp.value;  
    
});


