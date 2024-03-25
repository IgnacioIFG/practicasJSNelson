const divApp = document.querySelector(".app");

const cuadrado = document.createElement("div");
cuadrado.textContent = "Cuadrado";

cuadrado.classList.add("cuadrado");
divApp.append(cuadrado);

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
const colorAleatorio = colors[Math.floor(Math.random() * colors.length)];

cuadrado.style.backgroundColor = colorAleatorio;