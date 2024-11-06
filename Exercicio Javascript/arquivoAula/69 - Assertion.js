// Assertions


// Verificações no programa, que estao utilizada para assegurar que tudo ocorra de forma esperada

let array = [1,2,3,4,5,6];

let arr = [];

function iterarArray(array){
    if(array.length == 0){
        throw new Error("O array precisa ter elementos");
    }
    else{
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        }
    }
}


console.log(iterarArray(array))
console.log(iterarArray(arr))