const appDiv = document.querySelector(".app");
const img = document.createElement('img');

//establece la url y el texto alternativo
img.src='https://via.placeholder.com/150';
img.alt='Imagen de ejemplo'

//inserta la imagen al elemento del div
appDiv.append(img);
