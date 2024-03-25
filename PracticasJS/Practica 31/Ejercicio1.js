//Apartado 1
const board = document.querySelector(".board");
const container = document.createElement("div");


const ciudades = ['Cuenca', 'Granada', 'Soria', 'Madrid', 'Teruel'];
 
board.append(container);

ciudades.forEach((element) => {
    const ciuEle = document.createElement ("li");
    ciuEle.textContent=element;
    container.append(ciuEle);
});

//Apartado 1 re





