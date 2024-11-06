//Podemos converter json para uma string de forma facil

// ou tambem de string para json


const car ={
    "Marca": "Ferrari",
    "Rodas": 4,
    "Portas": 4,
    "Tipo":"Sendan"
}


let jsonToString = JSON.stringify(car);    // stringify faz a conversao para string

console.log(jsonToString);



let stringToJson =  JSON.parse(jsonToString); // Json.parse converte string para Json

console.log(stringToJson.Marca);