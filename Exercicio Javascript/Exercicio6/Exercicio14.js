/*Preencha a variável semPares apenas com números ímpares;

Utilize uma estrutura de loop para percorrer o array arr;

Verifique se o número é ímpar e coloque no array semPares;

No final, exiba o array semPares com console.log;*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []


for(let i = 0; i <= arr.length; i++){
      
    if( arr[i] % 2 == 1){
       
        semPares.push(arr[i])
    }

    
}
console.log(semPares)


