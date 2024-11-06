/* Aprofundando mais sobre Escopo 
O que tiver dentro de chaves é um escopo e o que tiver fora é outro escopo*/


let x = 10;

if(x > 5){
    let x = 20;
    console.log(x);
}


console.log(x);