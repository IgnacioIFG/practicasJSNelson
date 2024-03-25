const aleatorio = [];

function random(min, max){
   return Math.floor(Math.random()*(max - min + 1) + min);
}


for (let i=0; i<6; i++){
    for (let j=0; j<6; j++){
        if(i!=i+1){
            aleatorio[i]=random(1,49)
        } 
    }
    
 
}


alert("Esta combinacion te hara rico: " + (aleatorio) + " reintegro " + (aleatorio.length-1) )
