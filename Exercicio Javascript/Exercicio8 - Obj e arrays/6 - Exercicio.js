// criar 2 array e verificar se for maior imprimir maior. E se for menor, imprimir menor.


let array1 = [1,2,3,4,5];

let array2 = [1,2,3];

function verificarElementos(array){

    for(let i = 0; i < array.length; i++){
        if(array.length >=5){
            return "Muitos Elementos";
        }

        else{
            return "Poucos Elementos";
        }
    }
   

}

console.log(verificarElementos(array1))