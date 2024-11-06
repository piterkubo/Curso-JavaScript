/*Mutação o obj consegue herdar todas as caracteristica do outro virando uma ref ao mesmo */



let ObjA = {
    Pontos: 10,
};

ObjB = ObjA;  // A e B são iguais, mas C como nao herdou, se torna diferente.


let ObjC = {
    pontos: 10,
}



console.log(ObjA == ObjB);

console.log(ObjA == ObjC);