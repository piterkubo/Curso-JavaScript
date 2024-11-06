//Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.

//A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.

let array = [1,1,2,3,4,5,6,6,8,7,10,2,4]


function removeDuplicates(array){
    let numVisto = {};
    let result = [];


    

    for(let i = 0; i < array.length; i++){
        const valores = array[i];

       if(!numVisto[valores]){
        result.push(valores);
        numVisto[valores] = true;
       }
    }
    
    
    return result;
}

console.log(removeDuplicates(array));


/*Objeto seen: Este objeto é usado para rastrear os valores que já foram encontrados no array. Se um valor ainda não foi encontrado, ele é adicionado ao array result.

Array result: Esse array é preenchido com os valores únicos (sem duplicatas).

A lógica: Percorremos o array original e, para cada valor, verificamos se ele já foi visto (usando o objeto seen). Se não foi visto, o valor é adicionado ao array result.*/