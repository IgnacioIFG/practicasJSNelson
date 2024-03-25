let opc=0;
const gastos=[];

do{
    //menu con opciones
opc = prompt("1. Añadir un gasto. \n2. Mostrar gastos \n3. Eliminar gasto \n4. Modificar \n5.Salir");



//funcionalidad del menu
switch(opc){
    
    case "1":
        const añade= prompt("Untroduzca un gasto: ");
        gastos.push(añade);
        
        break;
    case "2":
        for (let i=0; i<gastos.length; i++ ){
            alert(gastos[i]);
        }
        break;
    case "3":
        const modificar=prompt(gastos[0]);

    
 

        break;
    case "4":
       

        break;
    case "5":
        alert("Ha salido del menu");


        break; 

};

}while(opc<=4);

