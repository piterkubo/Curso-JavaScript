/*Copiando todas as propriedade do obj*/

let ObjA ={

    prop1: 'teste',
    prop2: 'testando',

}

let ObjB ={
    prop3: 'propriedade'
}


console.log(ObjA);

Object.assign(ObjA,ObjB); /* copiar todos as propriedade de um obj para outro usando Assign A herda de B */


console.log(ObjA);