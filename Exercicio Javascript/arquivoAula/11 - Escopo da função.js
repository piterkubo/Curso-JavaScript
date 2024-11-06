/* escopo de uma função não impede de ter varias variaveis com o mesmo nome*/

let y = 10;

function imprimir(){
    let y = 25;
    console.log(y);
}

imprimir();
console.log(y);

