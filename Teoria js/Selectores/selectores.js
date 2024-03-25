//selecctionar por id
//selecciona el primero que encuentra si hay dos iguales

const antesScript = document.getElementById("antesScript");
console.log(antesScript);

//muy usado
//se crea como un array pero no lo es
const listItem = document.querySelectorAll(".listItem");
console.log(listItem);

//recorrer uno a uno los nodos ejempos
//el text content nos permite ver lo que hay en cada elemento
for (let i=0; i<listItem.length; i++){
    console.log(listItem[i].textContent);
}

//lo mismo pero con for each
listItem.forEach((items) => { console.log(items.textContent)})

// sleccionar de forma individual
const listItemFirs = document.querySelector(".first");
console.log(listItemFirs);

//puede no ser necesario con elemtn
const ul = document.querySelector ("ul");
console.log(ul);

const primerElemento = ul.querySelector(".first");
console.log(primerElemento);

//elements by name

const nameFirst = document.getElementsByName("desouesScript")
console.log(bameFirst);

//slect by tagname
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);




