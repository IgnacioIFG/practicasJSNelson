const form = document.querySelector("#formularioComp");

//que evento voy a escuchar...(el submit) pues caputramos eso
form.addEventListener("submit", validar);

//pararemos la recarga de la pagina
function validar(event){

    //evitamos el envio del formulario
    event.preventDefault();

    //ejemplo de como se van capurando los datos de un array
    var datosUser=[];

     // La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos
    const EXPREREGULAR= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    let nombre= document.querySelector("#nombre").value;
    let pass= document.querySelector("#pass").value;
    let genero= document.querySelector('input[name="genero"]:checked').value;
    let errorNombre=  document.querySelector("#errorNombre"); 
    let errorPass=  document.querySelector("#errorPass");

    //validacion de formulario
    if(nombre.length > 2 && nombre.length<20){
        datosUser.push(nombre);
    //añadimos la lista de la clase para que se corrija en tiempo real
        errorNombre.classList.add("no-error-text");

    }else{
        errorNombre.classList.remove("no-error-text");
        errorNombre.classList.add("error-text");
    }

    //validacion pass
    if(EXPREREGULAR.test(pass)){
        datosUser.push(pass);
        errorPass.classList.add("no-error-text");
    }else{
        errorPass.classList.remove("no-error-text");
        errorPass.classList.add("error-text");
    }
    datosUser.push(genero);

    //form.submit()

}