//Apartado 1
const main = document.querySelector(".main");
const lista = document.createElement("ul");

main.append(lista);

const ciudades = ['Cuenca', 'Granada', 'Soria', 'Madrid', 'Teruel'];

ciudades.forEach((ciudad) =>{
    const newCiudad = document.createElement("li");
    newCiudad.textContent = ciudad

    lista.append(newCiudad);

    if(ciudad === "Madrid"){
        newCiudad.classList.add('Madrid');
    }

});



 



