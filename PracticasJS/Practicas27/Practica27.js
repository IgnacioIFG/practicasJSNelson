// Ejercicio 1
let edadUsuario = prompt("¿Cúal es tu edad?");

if(edadUsuario %2==0){
    document.getElementById("edad").innerHTML=edadUsuario;
    document.getElementById("parImpar").innerHTML="Su edad es par";
}else{
    document.getElementById("edad").innerHTML=edadUsuario;
    document.getElementById("parImpar").innerHTML="Su edad es impar";
}

 

// Ejercicio 2
let numerosUsuario = [0,0,0];

for (let i=0; i<numerosUsuario.length; i++){
    numerosUsuario[i]=prompt("Añade un número");

}

for (let i = 0; i < numerosUsuario.length; i++){
    for (let j = 0; j<numerosUsuario.length-1; j++){

       if(numerosUsuario[j] > numerosUsuario[j + 1]){          
          let aux= numerosUsuario[j];
          numerosUsuario[j]=numerosUsuario[j+ 1];
          numerosUsuario[j+1]=aux; 
        }
    }  
}
alert(numerosUsuario[numerosUsuario.length-1] + " es el mayor")

//ejercicio 3

let numeroDia;

do {
   numeroDia = prompt("Introduzca un número del 1 al 7 para saber el día de la semana");
} while(numeroDia < 1 || numeroDia > 7);


switch(numeroDia){
    case "1":
        alert(numeroDia + " es el Lunes");
       break;
    case "2":
        alert(numeroDia + " es el Martes");
        break;
    case "3":
        alert(numeroDia + " es el Miercoles");
        break;
    case "4":
        alert(numeroDia + " es el Jueves");
        break;
    case "5":
        alert(numeroDia + " es el Viernes");
        break;
    case "6":
        alert(numeroDia + " es el Sabado");
        break;
    case "7":
        alert(numeroDia + " es el Domingo");
        break;
}

// Ejercicio 4

let pinRandom = [0,0,0,0];

for (let i = 0; i<pinRandom.length; i++){
    pinRandom[i] = Math.floor(Math.random()*10);
}

let intentosMax = 3;

while (intentosMax > 0) {
  let guess = prompt("Introduce el PIN de 4 dígitos:");

  if (guess.length !== 4) {
    alert("El PIN debe tener 4 dígitos.");
  } else {
    let correct = true;

    for (let i = 0; i < pinRandom.length; i++) {
      if (guess[i] !== pinRandom[i].toString()) {
        correct = false;
        break;
      }
    }

    if (correct) {
      alert("¡Eso fue correcto!");
      break;
    } else {
      alert("Lo siento, eso estaba mal.");
      intentosMax--;
    }
  }
}

if (intentosMax === 0) {
  alert("Lo siento, se acabaron los intentos. El PIN era " + pinRandom.join("") + ".");
}













