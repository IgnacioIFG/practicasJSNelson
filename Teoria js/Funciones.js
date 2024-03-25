const edad=18;

function cacularMayoriaEdad(edad){

    if(edad>=18){
        console.log("eres mayor de edad");
    } else{
        console.log("eres menor de edad");
    }
}

cacularMayoriaEdad(edad);

function saludar(){
    console.log("antes del return");
    return "hola";
    console.log("Despues del return, asique esto no sale")
}

console.log(saludar());

