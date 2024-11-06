//Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.

//A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.

//Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.

//Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.

//Considere que o array pode conter tanto números inteiros positivos quanto negativos.


const array = [1,2,3,2,4,5,1];

function SomarNumeros(array){
    let num = {};
    let soma = 0;

    for(let i = 0; i < array.length; i++){
        const numero = array[i];
       if(num[numero])
       {
         num[numero]++
       }

       else
       {
         num[numero] = 1;
       }

    }

    for(let i = 0; i < array.length; i++){
        const numero = array[i];

        if(num[numero] === 1){
            soma = soma + numero;
        }

    }

   return soma;
  

    
}

console.log(SomarNumeros(array));



/*Primeira Passagem:

Cria-se um objeto numberCounts que armazena a quantidade de vezes que cada número aparece no array.
Se o número já existe no objeto, incrementa sua contagem.
Se o número ainda não existe no objeto, inicializa a contagem dele com 1.
Segunda Passagem:

Percorre-se o array novamente, e para cada número, verifica-se se ele aparece exatamente uma vez no objeto numberCounts.
Se sim, adiciona o número à variável sum.
Retorno:

A função retorna a soma de todos os números que aparecem apenas uma vez no array.
No exemplo fornecido, os números que aparecem apenas uma vez são 3, 4 e 5, e a soma deles é 12.*/