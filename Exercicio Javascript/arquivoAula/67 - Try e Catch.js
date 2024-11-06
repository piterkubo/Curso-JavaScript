// O bloco try catch, vai tentar executar um codigo, caso não consiga
// ele pode retornar o erro que esse codigo gerou

// muito util para debug

// ex:

try{
    let c = a + b;
}

catch(error){
    console.log("Algo deu errado: " + error);
    //throw new Error(e)
}

console.log('teste')