//Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.

//A função deve retornar o maior número presente no array.


const array = [1,2,3,4,5]



function FindMaxNumber(array){
    let max = [0];

    for(let i = 0 ; i < array.length; i ++){
        if(array[i] > max){
            max = array[i];
        }
    }

    return max;
}

console.log(FindMaxNumber(array));