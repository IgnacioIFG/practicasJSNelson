//ponemos ready el formulario
const form = document.querySelector("#formulario");

//le añadimos el eventoq que voy a escuchar..
form.addEventListener("submit", validar)

//vamos con la funcion validar
function validar(event){

    event.preventDefault()

    var datosUser=[];
     
    const expresionRegular= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const expresionCorreor= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let nombre= document.querySelector("#nombre").value;
    let mail = document.querySelector("#mail").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    const checkboxTerminos = document.querySelector("#terminos");

    let errorNombre = document.querySelector("#errorNombre");
    let errorEmail = document.querySelector("#errorEmail");
    let errorSexo = document.querySelector("#errorSexo");
    let errorterminos = document.querySelector("#errorterminos");

    //validacion nombre
    if (nombre.length >= 2 && nombre.length <= 20) {
        // El nombre tiene al menos 2 caracteres y no supera los 20 caracteres
        datosUser.push(nombre);
        errorNombre.classList.add("no-error-text");
    } else {
        // El nombre no cumple con las condiciones de validación
        errorNombre.classList.remove("no-error-text");
        errorNombre.classList.add("error-text");
    }
    //valdiar mail
    if(expresionCorreor.test(mail)){
        datosUser.push(mail);
        errorEmail.classList.add("no-error-text");
    }else{
        errorEmail.classList.remove("no-error-text");
        errorEmail.classList.add("error-text");
    }
    datosUser.push(genero);
     
    //validar check
    if(checkboxTerminos.checked){
        datosUser.push(checkboxTerminos);
        errorterminos.classList.add("no-error-text");
    }else{
        errorterminos.classList.remove("no-error-text");
        errorterminos.classList.add("error-text");
    }

}