// Finally

// Finally é executada independente do resultado do try/catch

// E podemos exsistir com try e catch ou apenas try

try{
    let c = a + b;
}

catch(error){
    console.log("Algo deu errado: " + error);

}

finally{
    console.log("Executou")
}