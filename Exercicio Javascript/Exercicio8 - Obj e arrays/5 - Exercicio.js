// Crie um array com 5 nome 

// verifique se o nome existe no array

// se existir imprima alguma msg no console.


let array = ["Piter", "Vivi","Lucas","Mel", "Bingo"];






if(array.includes("Piter")){
    console.log("O nome foi encontrado !!!!")
};


//ou


for(let i = 0; i <= array.length; i++){
    if(array[i] === "Piter"){
        console.log("O nome esta dentro do array")
    }
    

    else{
        console.log("O nome não foi encontrado");
    }

    break;
}